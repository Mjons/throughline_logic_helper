import { useState, useCallback } from "react";
import type { LLMClient } from "../lib/llm-client";
import {
  type UserCorpus,
  type SourceDocument,
  createEmptyCorpus,
  genId,
  coverageScore,
} from "../lib/corpus";
import type { GenerationProgress } from "../lib/generator";
import type { FrameworkSelection } from "../lib/template-selector";
import { ChatInterface } from "./ChatInterface";
import { AgentProgress } from "./AgentProgress";

type Props = {
  client: LLMClient;
  corpus: UserCorpus;
  onCorpusUpdate: (corpus: UserCorpus) => void;
  onClose: () => void;
  onGenerate: (mode: "guided" | "lfg") => void;
  generating: boolean;
  progress: GenerationProgress | null;
  frameworkSelection: FrameworkSelection | null;
  onConfirmFramework: () => void;
  onSwitchFramework: (id: string) => void;
  awaitingConfirmation: boolean;
  model?: string;
};

type Tab = "chat" | "documents";

export function IngestPanel({
  client,
  corpus,
  onCorpusUpdate,
  onClose,
  onGenerate,
  generating,
  progress,
  frameworkSelection,
  onConfirmFramework,
  onSwitchFramework,
  awaitingConfirmation,
  model,
}: Props) {
  const [tab, setTab] = useState<Tab>("chat");
  const [pasteText, setPasteText] = useState("");

  const handlePaste = useCallback(() => {
    const text = pasteText.trim();
    if (!text) return;

    const doc: SourceDocument = {
      id: genId("doc"),
      type: "paste",
      content: text,
      title: `Pasted text (${text.length} chars)`,
      timestamp: new Date().toISOString(),
    };

    onCorpusUpdate({
      ...corpus,
      documents: [...corpus.documents, doc],
    });
    setPasteText("");
  }, [pasteText, corpus, onCorpusUpdate]);

  const handleRemoveDoc = useCallback(
    (docId: string) => {
      onCorpusUpdate({
        ...corpus,
        documents: corpus.documents.filter((d) => d.id !== docId),
        extractedFacts: corpus.extractedFacts.filter(
          (f) => f.sourceDocId !== docId,
        ),
      });
    },
    [corpus, onCorpusUpdate],
  );

  const handleReset = useCallback(() => {
    onCorpusUpdate(createEmptyCorpus());
  }, [onCorpusUpdate]);

  const score = coverageScore(corpus.coverage);
  const factCount = corpus.extractedFacts.length;
  const docCount = corpus.documents.filter((d) => d.type !== "chat").length;
  const hasEnoughContext = factCount >= 3 || score >= 0.3;

  return (
    <div className="ingest-panel">
      <div className="ingest-header">
        <div className="ingest-header-top">
          <h2>Build your throughline</h2>
          <button
            className="settings-close"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <p className="ingest-subtitle">
          Tell the agent about your business. It will extract key facts and
          recommend a framework.
        </p>

        <div className="ingest-tabs">
          <button
            className={`ingest-tab ${tab === "chat" ? "active" : ""}`}
            onClick={() => setTab("chat")}
          >
            Chat
          </button>
          <button
            className={`ingest-tab ${tab === "documents" ? "active" : ""}`}
            onClick={() => setTab("documents")}
          >
            Documents{docCount > 0 ? ` (${docCount})` : ""}
          </button>
        </div>
      </div>

      <div className="ingest-body">
        {/* Framework confirmation card */}
        {awaitingConfirmation && frameworkSelection && (
          <div className="framework-confirm">
            <div className="framework-confirm-header">
              Recommended framework
            </div>
            <div className="framework-confirm-name">
              {frameworkSelection.frameworkName}
            </div>
            <div className="framework-confirm-reason">
              {frameworkSelection.reasoning}
            </div>
            {frameworkSelection.alternativeId && (
              <div className="framework-confirm-alt">
                Alternative: <strong>{frameworkSelection.alternativeId}</strong>{" "}
                — {frameworkSelection.alternativeReason}
                <button
                  className="framework-alt-btn"
                  onClick={() =>
                    onSwitchFramework(frameworkSelection.alternativeId)
                  }
                >
                  Use this instead
                </button>
              </div>
            )}
            <div className="framework-confirm-actions">
              <button className="tb-btn primary" onClick={onConfirmFramework}>
                Generate with this framework
              </button>
            </div>
          </div>
        )}

        {/* Progress bar during generation */}
        {generating && progress && <AgentProgress progress={progress} />}

        {/* Main content */}
        {!awaitingConfirmation && (
          <>
            {tab === "chat" ? (
              <ChatInterface
                client={client}
                corpus={corpus}
                onCorpusUpdate={onCorpusUpdate}
                model={model}
              />
            ) : (
              <div className="ingest-documents">
                <div className="ingest-paste-area">
                  <textarea
                    value={pasteText}
                    onChange={(e) => setPasteText(e.target.value)}
                    placeholder="Paste pitch deck content, about page text, investor notes, or any relevant context..."
                    rows={6}
                  />
                  <button
                    className="tb-btn"
                    onClick={handlePaste}
                    disabled={!pasteText.trim()}
                  >
                    Add document
                  </button>
                </div>

                {corpus.documents.filter((d) => d.type !== "chat").length >
                  0 && (
                  <div className="ingest-doc-list">
                    {corpus.documents
                      .filter((d) => d.type !== "chat")
                      .map((doc) => (
                        <div key={doc.id} className="ingest-doc-card">
                          <div className="ingest-doc-info">
                            <span className="ingest-doc-type">{doc.type}</span>
                            <span className="ingest-doc-title">
                              {doc.title}
                            </span>
                          </div>
                          <button
                            className="ingest-doc-remove"
                            onClick={() => handleRemoveDoc(doc.id)}
                            aria-label="Remove document"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      <div className="ingest-footer">
        <div className="ingest-stats">
          <span>{factCount} facts</span>
          <span>{Math.round(score * 100)}% coverage</span>
        </div>
        <div className="ingest-footer-actions">
          <button
            className="tb-btn"
            onClick={handleReset}
            disabled={generating}
          >
            Reset
          </button>
          <button
            className="tb-btn"
            onClick={() => onGenerate("guided")}
            disabled={!hasEnoughContext || generating}
            title={
              hasEnoughContext
                ? "Select framework first, then generate"
                : "Add more context before generating"
            }
          >
            Generate
          </button>
          <button
            className="tb-btn primary"
            onClick={() => onGenerate("lfg")}
            disabled={!hasEnoughContext || generating}
            title={
              hasEnoughContext
                ? "Auto-select framework and generate everything"
                : "Add more context before generating"
            }
          >
            LFG
          </button>
        </div>
      </div>
    </div>
  );
}
