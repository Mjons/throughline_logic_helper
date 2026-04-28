import { useState, useRef, useEffect, useCallback } from "react";
import type { LLMClient, Message } from "../lib/llm-client";
import {
  INGEST_INTERVIEW,
  EXTRACT_FACTS,
  INGEST_READINESS_CHECK,
} from "../lib/prompts";
import {
  type UserCorpus,
  type ExtractedFact,
  type CoverageDimension,
  type CoverageStatus,
  genId,
  parseFacts,
  parseCoverage,
  coverageScore,
  COVERAGE_LABELS,
} from "../lib/corpus";

type Props = {
  client: LLMClient;
  corpus: UserCorpus;
  onCorpusUpdate: (corpus: UserCorpus) => void;
  model?: string;
};

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  streaming?: boolean;
};

export function ChatInterface({
  client,
  corpus,
  onCorpusUpdate,
  model,
}: Props) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    if (corpus.chatHistory.length > 0) {
      return corpus.chatHistory
        .filter((m) => m.role !== "system")
        .map((m) => ({
          id: genId("msg"),
          role: m.role as "user" | "assistant",
          content: m.content,
        }));
    }
    return [];
  });
  const [input, setInput] = useState("");
  const [streaming, setStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const startedRef = useRef(corpus.chatHistory.length > 0);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Start the conversation if we haven't yet
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    startConversation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function startConversation() {
    const assistantId = genId("msg");
    setMessages([
      { id: assistantId, role: "assistant", content: "", streaming: true },
    ]);
    setStreaming(true);

    const apiMessages: Message[] = [
      { role: "user", content: "I want to build a throughline. Let's start." },
    ];

    let fullText = "";
    try {
      for await (const chunk of client.stream(apiMessages, {
        systemPrompt: INGEST_INTERVIEW,
        model,
      })) {
        fullText += chunk;
        setMessages([
          {
            id: assistantId,
            role: "assistant",
            content: fullText,
            streaming: true,
          },
        ]);
      }
    } catch (err) {
      fullText =
        fullText ||
        `Error: ${err instanceof Error ? err.message : "Failed to connect"}`;
    }

    setMessages([{ id: assistantId, role: "assistant", content: fullText }]);
    setStreaming(false);

    const newHistory: Message[] = [
      { role: "user", content: "I want to build a throughline. Let's start." },
      { role: "assistant", content: fullText },
    ];
    onCorpusUpdate({ ...corpus, chatHistory: newHistory });
  }

  async function handleSend() {
    const text = input.trim();
    if (!text || streaming) return;
    setInput("");

    const userId = genId("msg");
    const assistantId = genId("msg");

    const userMsg: ChatMessage = { id: userId, role: "user", content: text };
    setMessages((prev) => [
      ...prev,
      userMsg,
      { id: assistantId, role: "assistant", content: "", streaming: true },
    ]);
    setStreaming(true);

    const updatedHistory: Message[] = [
      ...corpus.chatHistory,
      { role: "user", content: text },
    ];

    let fullText = "";
    try {
      for await (const chunk of client.stream(updatedHistory, {
        systemPrompt: INGEST_INTERVIEW,
        model,
      })) {
        fullText += chunk;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: fullText, streaming: true }
              : m,
          ),
        );
      }
    } catch (err) {
      fullText =
        fullText ||
        `Error: ${err instanceof Error ? err.message : "Failed to connect"}`;
    }

    setMessages((prev) =>
      prev.map((m) =>
        m.id === assistantId
          ? { ...m, content: fullText, streaming: false }
          : m,
      ),
    );
    setStreaming(false);

    const finalHistory: Message[] = [
      ...updatedHistory,
      { role: "assistant", content: fullText },
    ];

    // Background: extract facts and check coverage
    const newCorpus = { ...corpus, chatHistory: finalHistory };
    onCorpusUpdate(newCorpus);
    extractFactsInBackground(finalHistory, newCorpus);
  }

  async function extractFactsInBackground(
    history: Message[],
    currentCorpus: UserCorpus,
  ) {
    const chatDocId = "chat-transcript";
    const transcript = history
      .map((m) => `${m.role}: ${m.content}`)
      .join("\n\n");

    try {
      // Extract facts
      const factsJson = await client.chat(
        [
          {
            role: "user",
            content: `<conversation>\n${transcript}\n</conversation>`,
          },
        ],
        { systemPrompt: EXTRACT_FACTS, model, temperature: 0.2 },
      );
      const newFacts = parseFacts(factsJson, chatDocId);

      // Check coverage
      const coverageJson = await client.chat(
        [
          {
            role: "user",
            content: `<conversation>\n${transcript}\n</conversation>`,
          },
        ],
        { systemPrompt: INGEST_READINESS_CHECK, model, temperature: 0.1 },
      );
      const newCoverage = parseCoverage(coverageJson);

      const doc = currentCorpus.documents.find((d) => d.id === chatDocId);
      const updatedDocs = doc
        ? currentCorpus.documents.map((d) =>
            d.id === chatDocId
              ? {
                  ...d,
                  content: transcript,
                  timestamp: new Date().toISOString(),
                }
              : d,
          )
        : [
            ...currentCorpus.documents,
            {
              id: chatDocId,
              type: "chat" as const,
              content: transcript,
              title: "Chat transcript",
              timestamp: new Date().toISOString(),
            },
          ];

      onCorpusUpdate({
        ...currentCorpus,
        documents: updatedDocs,
        extractedFacts:
          newFacts.length > 0 ? newFacts : currentCorpus.extractedFacts,
        coverage: newCoverage ?? currentCorpus.coverage,
      });
    } catch {
      // Background extraction failure is non-critical
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const score = coverageScore(corpus.coverage);

  return (
    <div className="chat-interface">
      <div className="chat-coverage">
        <div className="chat-coverage-bar">
          <div
            className="chat-coverage-fill"
            style={{ width: `${Math.round(score * 100)}%` }}
          />
        </div>
        <div className="chat-coverage-dims">
          {(
            Object.entries(corpus.coverage) as [
              CoverageDimension,
              CoverageStatus,
            ][]
          ).map(([dim, status]) => (
            <span key={dim} className={`chat-cov-dim ${status}`} title={dim}>
              {COVERAGE_LABELS[dim]}
            </span>
          ))}
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-msg ${msg.role}`}>
            <div className="chat-msg-role">
              {msg.role === "assistant" ? "Agent" : "You"}
            </div>
            <div className="chat-msg-content">
              {msg.content ||
                (msg.streaming ? <span className="chat-typing" /> : null)}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {corpus.extractedFacts.length > 0 && (
        <div className="chat-facts-bar">
          <span className="chat-facts-count">
            {corpus.extractedFacts.length} facts extracted
          </span>
        </div>
      )}

      <div className="chat-input-area">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your business, paste content, or answer the agent's questions..."
          disabled={streaming}
          rows={2}
        />
        <button
          className="chat-send-btn"
          onClick={handleSend}
          disabled={!input.trim() || streaming}
          title="Send (Enter)"
        >
          &uarr;
        </button>
      </div>
    </div>
  );
}
