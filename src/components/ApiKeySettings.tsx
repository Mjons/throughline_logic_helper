import { useState, useEffect } from "react";
import {
  type LLMProvider,
  type LLMSettings,
  AVAILABLE_MODELS,
  loadLLMSettings,
  saveLLMSettings,
  clearLLMSettings,
  createClient,
} from "../lib/llm-client";

type Props = {
  open: boolean;
  onClose: () => void;
  onSettingsChange: (settings: LLMSettings | null) => void;
};

const PROVIDER_LABELS: Record<LLMProvider, string> = {
  claude: "Claude (Anthropic)",
  gemini: "Gemini (Google)",
  openai: "OpenAI",
};

export function ApiKeySettings({ open, onClose, onSettingsChange }: Props) {
  const [provider, setProvider] = useState<LLMProvider>("claude");
  const [apiKey, setApiKey] = useState("");
  const [model, setModel] = useState(AVAILABLE_MODELS.claude[0]);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState<"success" | "fail" | null>(null);
  const [hasExisting, setHasExisting] = useState(false);

  useEffect(() => {
    const saved = loadLLMSettings();
    if (saved) {
      setProvider(saved.provider);
      setApiKey(saved.apiKey);
      setModel(saved.model);
      setHasExisting(true);
    }
  }, [open]);

  useEffect(() => {
    setModel(AVAILABLE_MODELS[provider][0]);
    setTestResult(null);
  }, [provider]);

  const handleSave = () => {
    const settings: LLMSettings = { provider, apiKey, model };
    saveLLMSettings(settings);
    onSettingsChange(settings);
    setHasExisting(true);
    onClose();
  };

  const handleClear = () => {
    clearLLMSettings();
    setApiKey("");
    setProvider("claude");
    setModel(AVAILABLE_MODELS.claude[0]);
    setHasExisting(false);
    setTestResult(null);
    onSettingsChange(null);
  };

  const handleTest = async () => {
    if (!apiKey) return;
    setTesting(true);
    setTestResult(null);
    try {
      const client = createClient(provider, apiKey);
      const ok = await client.testConnection();
      setTestResult(ok ? "success" : "fail");
    } catch {
      setTestResult("fail");
    }
    setTesting(false);
  };

  if (!open) return null;

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>API Settings</h2>
          <button
            className="settings-close"
            onClick={onClose}
            aria-label="Close settings"
          >
            &times;
          </button>
        </div>

        <div className="settings-body">
          <p className="settings-note">
            Your API key is stored locally in your browser. It is never sent to
            any Throughline server — only directly to your chosen provider.
          </p>

          <div className="settings-field">
            <label>Provider</label>
            <select
              value={provider}
              onChange={(e) => setProvider(e.target.value as LLMProvider)}
            >
              {(Object.keys(PROVIDER_LABELS) as LLMProvider[]).map((p) => (
                <option key={p} value={p}>
                  {PROVIDER_LABELS[p]}
                </option>
              ))}
            </select>
          </div>

          <div className="settings-field">
            <label>API Key</label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => {
                setApiKey(e.target.value);
                setTestResult(null);
              }}
              placeholder={`Enter your ${PROVIDER_LABELS[provider]} API key`}
              spellCheck={false}
              autoComplete="off"
            />
          </div>

          <div className="settings-field">
            <label>Model</label>
            <select value={model} onChange={(e) => setModel(e.target.value)}>
              {AVAILABLE_MODELS[provider].map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          <div className="settings-actions">
            <button
              className="tb-btn"
              onClick={handleTest}
              disabled={!apiKey || testing}
            >
              {testing ? "Testing..." : "Test connection"}
            </button>
            {testResult === "success" && (
              <span className="settings-test-ok">Connected</span>
            )}
            {testResult === "fail" && (
              <span className="settings-test-fail">Connection failed</span>
            )}
          </div>

          <div className="settings-footer">
            <button
              className="tb-btn primary"
              onClick={handleSave}
              disabled={!apiKey}
            >
              Save
            </button>
            {hasExisting && (
              <button className="tb-btn danger" onClick={handleClear}>
                Clear key
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
