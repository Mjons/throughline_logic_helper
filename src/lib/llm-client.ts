export type LLMProvider = "claude" | "gemini" | "openai";

export type Message = {
  role: "user" | "assistant" | "system";
  content: string;
};

export type ChatOptions = {
  model?: string;
  maxTokens?: number;
  temperature?: number;
  systemPrompt?: string;
};

export interface LLMClient {
  chat(messages: Message[], options?: ChatOptions): Promise<string>;
  stream(messages: Message[], options?: ChatOptions): AsyncIterable<string>;
  testConnection(): Promise<boolean>;
}

const DEFAULT_MODELS: Record<LLMProvider, string> = {
  claude: "claude-sonnet-4-6",
  gemini: "gemini-2.0-flash",
  openai: "gpt-4o",
};

export const AVAILABLE_MODELS: Record<LLMProvider, string[]> = {
  claude: ["claude-sonnet-4-6", "claude-haiku-4-5", "claude-opus-4-7"],
  gemini: ["gemini-2.0-flash", "gemini-2.5-pro-preview-05-06"],
  openai: ["gpt-4o", "gpt-4o-mini"],
};

// --- Claude ---

class ClaudeClient implements LLMClient {
  constructor(private apiKey: string) {}

  async chat(messages: Message[], options?: ChatOptions): Promise<string> {
    const systemPrompt =
      options?.systemPrompt ??
      messages.find((m) => m.role === "system")?.content;
    const chatMessages = messages
      .filter((m) => m.role !== "system")
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: options?.model ?? DEFAULT_MODELS.claude,
        max_tokens: options?.maxTokens ?? 4096,
        ...(systemPrompt ? { system: systemPrompt } : {}),
        messages: chatMessages,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Claude API error ${res.status}: ${err}`);
    }

    const data = await res.json();
    return data.content[0].text;
  }

  async *stream(
    messages: Message[],
    options?: ChatOptions,
  ): AsyncIterable<string> {
    const systemPrompt =
      options?.systemPrompt ??
      messages.find((m) => m.role === "system")?.content;
    const chatMessages = messages
      .filter((m) => m.role !== "system")
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.content,
      }));

    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": this.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({
        model: options?.model ?? DEFAULT_MODELS.claude,
        max_tokens: options?.maxTokens ?? 4096,
        stream: true,
        ...(systemPrompt ? { system: systemPrompt } : {}),
        messages: chatMessages,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Claude API error ${res.status}: ${err}`);
    }

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6);
        if (data === "[DONE]") return;
        try {
          const parsed = JSON.parse(data);
          if (parsed.type === "content_block_delta" && parsed.delta?.text) {
            yield parsed.delta.text;
          }
        } catch {
          // skip malformed JSON
        }
      }
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      const result = await this.chat(
        [{ role: "user", content: "Reply with exactly: ok" }],
        { maxTokens: 10 },
      );
      return result.toLowerCase().includes("ok");
    } catch (e) {
      console.error("[Claude testConnection] failed:", e);
      return false;
    }
  }
}

// --- OpenAI ---

class OpenAIClient implements LLMClient {
  constructor(private apiKey: string) {}

  async chat(messages: Message[], options?: ChatOptions): Promise<string> {
    const apiMessages = messages.filter((m) => m.role !== "system");
    const allMessages = [
      ...(options?.systemPrompt
        ? [{ role: "system" as const, content: options.systemPrompt }]
        : messages
            .filter((m) => m.role === "system")
            .map((m) => ({ role: "system" as const, content: m.content }))),
      ...apiMessages.map((m) => ({ role: m.role, content: m.content })),
    ];

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: options?.model ?? DEFAULT_MODELS.openai,
        max_tokens: options?.maxTokens ?? 4096,
        temperature: options?.temperature ?? 0.7,
        messages: allMessages,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`OpenAI API error ${res.status}: ${err}`);
    }

    const data = await res.json();
    return data.choices[0].message.content;
  }

  async *stream(
    messages: Message[],
    options?: ChatOptions,
  ): AsyncIterable<string> {
    const apiMessages = messages.filter((m) => m.role !== "system");
    const allMessages = [
      ...(options?.systemPrompt
        ? [{ role: "system" as const, content: options.systemPrompt }]
        : messages
            .filter((m) => m.role === "system")
            .map((m) => ({ role: "system" as const, content: m.content }))),
      ...apiMessages.map((m) => ({ role: m.role, content: m.content })),
    ];

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        model: options?.model ?? DEFAULT_MODELS.openai,
        max_tokens: options?.maxTokens ?? 4096,
        temperature: options?.temperature ?? 0.7,
        stream: true,
        messages: allMessages,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`OpenAI API error ${res.status}: ${err}`);
    }

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6);
        if (data === "[DONE]") return;
        try {
          const parsed = JSON.parse(data);
          const delta = parsed.choices?.[0]?.delta?.content;
          if (delta) yield delta;
        } catch {
          // skip
        }
      }
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      const result = await this.chat(
        [{ role: "user", content: "Reply with exactly: ok" }],
        { maxTokens: 10 },
      );
      return result.toLowerCase().includes("ok");
    } catch {
      return false;
    }
  }
}

// --- Gemini ---

class GeminiClient implements LLMClient {
  constructor(private apiKey: string) {}

  async chat(messages: Message[], options?: ChatOptions): Promise<string> {
    const model = options?.model ?? DEFAULT_MODELS.gemini;
    const systemPrompt =
      options?.systemPrompt ??
      messages.find((m) => m.role === "system")?.content;
    const chatMessages = messages.filter((m) => m.role !== "system");

    const contents = chatMessages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${this.apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          ...(systemPrompt
            ? { systemInstruction: { parts: [{ text: systemPrompt }] } }
            : {}),
          generationConfig: {
            maxOutputTokens: options?.maxTokens ?? 4096,
            temperature: options?.temperature ?? 0.7,
          },
        }),
      },
    );

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Gemini API error ${res.status}: ${err}`);
    }

    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
  }

  async *stream(
    messages: Message[],
    options?: ChatOptions,
  ): AsyncIterable<string> {
    const model = options?.model ?? DEFAULT_MODELS.gemini;
    const systemPrompt =
      options?.systemPrompt ??
      messages.find((m) => m.role === "system")?.content;
    const chatMessages = messages.filter((m) => m.role !== "system");

    const contents = chatMessages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${this.apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents,
          ...(systemPrompt
            ? { systemInstruction: { parts: [{ text: systemPrompt }] } }
            : {}),
          generationConfig: {
            maxOutputTokens: options?.maxTokens ?? 4096,
            temperature: options?.temperature ?? 0.7,
          },
        }),
      },
    );

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Gemini API error ${res.status}: ${err}`);
    }

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });

      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const line of lines) {
        if (!line.startsWith("data: ")) continue;
        const data = line.slice(6);
        try {
          const parsed = JSON.parse(data);
          const text = parsed.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text) yield text;
        } catch {
          // skip
        }
      }
    }
  }

  async testConnection(): Promise<boolean> {
    try {
      const result = await this.chat(
        [{ role: "user", content: "Reply with exactly: ok" }],
        { maxTokens: 10 },
      );
      return result.toLowerCase().includes("ok");
    } catch {
      return false;
    }
  }
}

// --- Factory ---

export function createClient(provider: LLMProvider, apiKey: string): LLMClient {
  switch (provider) {
    case "claude":
      return new ClaudeClient(apiKey);
    case "openai":
      return new OpenAIClient(apiKey);
    case "gemini":
      return new GeminiClient(apiKey);
  }
}

// --- Settings persistence ---

export type LLMSettings = {
  provider: LLMProvider;
  apiKey: string;
  model: string;
};

const SETTINGS_KEY = "throughline:llm-settings";

export function loadLLMSettings(): LLMSettings | null {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveLLMSettings(settings: LLMSettings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

export function clearLLMSettings() {
  localStorage.removeItem(SETTINGS_KEY);
}
