import { useState, useEffect, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  MarkerType,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type NodeTypes,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import "./App.css";

import { templates, getTemplate } from "./templates";
import type { Template } from "./types";
import { BeatClusterNode } from "./components/BeatClusterNode";
import { BeatOptionNode } from "./components/BeatOptionNode";
import { SidePanel } from "./components/SidePanel";
import { ThroughlineOverview } from "./components/ThroughlineOverview";
import { TopBar } from "./components/TopBar";

const CLUSTER_W = 300;
const CLUSTER_GAP = 90;
const OPTION_W = 260;
const OPTION_GAP = 24;
const HEADER_H = 128;

const OPTION_PAD_Y = 24;
const TITLE_LINE_H = 18;
const DESC_LINE_H = 16;
const OPTION_MIN_H = 56;
const DESC_GAP = 6;
const OPTION_BUFFER = 12;

// Content width = OPTION_W(260) - padding(14*2) - edit-btn-margin(24) = 208px
// Title: 14px bold ≈ 8.5px/char → ~24 chars/line (conservative for bold)
// Desc:  11px      ≈ 6.2px/char → ~33 chars/line (conservative for wrapping)
const TITLE_CHARS_PER_LINE = 24;
const DESC_CHARS_PER_LINE = 33;

function wrapLines(text: string, charsPerLine: number): number {
  if (!text) return 0;
  let lines = 0;
  for (const para of text.split("\n")) {
    if (!para) {
      lines += 1;
      continue;
    }
    // Simulate word-wrap: words don't break mid-word
    let col = 0;
    let paraLines = 1;
    for (const word of para.split(/\s+/)) {
      if (col === 0) {
        col = word.length;
      } else if (col + 1 + word.length > charsPerLine) {
        paraLines++;
        col = word.length;
      } else {
        col += 1 + word.length;
      }
    }
    lines += paraLines;
  }
  return lines;
}

function estimateOptionHeight(title: string, description?: string): number {
  const titleLines = Math.max(1, wrapLines(title, TITLE_CHARS_PER_LINE));
  const descLines = description
    ? wrapLines(description, DESC_CHARS_PER_LINE)
    : 0;
  const h =
    OPTION_PAD_Y +
    titleLines * TITLE_LINE_H +
    (descLines > 0 ? DESC_GAP + descLines * DESC_LINE_H : 0) +
    OPTION_BUFFER;
  return Math.max(OPTION_MIN_H, h);
}

const nodeTypes: NodeTypes = {
  beatCluster: BeatClusterNode,
  beatOption: BeatOptionNode,
};

const TL_ACTIVE = "#b4844b";
const TL_COMMITTED = "#3f7a3a";

type OptionOverride = { title?: string; description?: string };
type ClusterOverride = { name?: string; subtitle?: string; prompt?: string };
type BeatOverride = {
  cluster?: ClusterOverride;
  options?: Record<string, OptionOverride>;
};
type TemplateOverrides = Record<string, BeatOverride>;

function mergedBeat(beat: Template["beats"][number], o?: BeatOverride) {
  const c = o?.cluster ?? {};
  return {
    name: c.name ?? beat.name,
    subtitle: c.subtitle !== undefined ? c.subtitle : beat.subtitle,
    prompt: c.prompt !== undefined ? c.prompt : beat.prompt,
  };
}

function mergedOption(
  option: Template["beats"][number]["options"][number],
  o?: OptionOverride,
) {
  return {
    title: o?.title ?? option.title,
    description:
      o?.description !== undefined ? o.description : option.description,
  };
}

function buildNodes(
  template: Template,
  selections: Record<string, string>,
  committed: boolean,
  overrides: TemplateOverrides,
  onEditOption: (
    beatId: string,
    optionId: string,
    field: "title" | "description",
    value: string,
  ) => void,
  onEditCluster: (
    beatId: string,
    field: "name" | "subtitle" | "prompt",
    value: string,
  ) => void,
): Node[] {
  const nodes: Node[] = [];
  template.beats.forEach((beat, beatIndex) => {
    const clusterId = `cluster-${beat.id}`;
    const mb = mergedBeat(beat, overrides[beat.id]);

    const optionLayout = beat.options.map((option) => {
      const mo = mergedOption(option, overrides[beat.id]?.options?.[option.id]);
      return {
        option,
        merged: mo,
        height: estimateOptionHeight(mo.title, mo.description),
      };
    });
    const optionsBlockHeight = optionLayout.reduce(
      (sum, o) => sum + o.height + OPTION_GAP,
      0,
    );
    const clusterHeight = HEADER_H + optionsBlockHeight + OPTION_GAP;

    nodes.push({
      id: clusterId,
      type: "beatCluster",
      position: { x: beatIndex * (CLUSTER_W + CLUSTER_GAP), y: 0 },
      data: {
        name: mb.name,
        subtitle: mb.subtitle,
        prompt: mb.prompt,
        beatIndex,
        committed,
        hasSelection: !!selections[beat.id],
        beatId: beat.id,
        onEdit: onEditCluster,
      },
      style: {
        width: CLUSTER_W,
        height: clusterHeight,
        background: "transparent",
        border: "none",
        padding: 0,
      },
      draggable: true,
      selectable: false,
      connectable: false,
      zIndex: 0,
    });

    let yCursor = HEADER_H;
    optionLayout.forEach(({ option, merged: mo, height }) => {
      nodes.push({
        id: `option-${option.id}`,
        type: "beatOption",
        position: {
          x: (CLUSTER_W - OPTION_W) / 2,
          y: yCursor,
        },
        data: {
          title: mo.title,
          description: mo.description,
          selected: selections[beat.id] === option.id,
          committed,
          beatId: beat.id,
          optionId: option.id,
          onEdit: onEditOption,
        },
        parentId: clusterId,
        extent: "parent",
        draggable: false,
        selectable: true,
        connectable: false,
        style: {
          width: OPTION_W,
          height,
          background: "transparent",
          border: "none",
          padding: 0,
        },
      });
      yCursor += height + OPTION_GAP;
    });
  });
  return nodes;
}

function buildEdges(
  template: Template,
  selections: Record<string, string>,
  committed: boolean,
): Edge[] {
  const edges: Edge[] = [];
  for (let i = 0; i < template.beats.length - 1; i++) {
    const cur = template.beats[i];
    const nxt = template.beats[i + 1];
    if (selections[cur.id] && selections[nxt.id]) {
      const color = committed ? TL_COMMITTED : TL_ACTIVE;
      edges.push({
        id: `tl-${cur.id}-${nxt.id}`,
        source: `option-${selections[cur.id]}`,
        target: `option-${selections[nxt.id]}`,
        animated: !committed,
        style: { stroke: color, strokeWidth: 3 },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          color,
          width: 22,
          height: 22,
        },
        zIndex: 10,
      });
    }
  }
  return edges;
}

function buildMarkdown(
  template: Template,
  selections: Record<string, string>,
  overrides: TemplateOverrides,
): string {
  const lines: string[] = [];
  lines.push(`# Throughline — ${template.name}`);
  lines.push("");
  template.beats.forEach((beat, i) => {
    const mb = mergedBeat(beat, overrides[beat.id]);
    const opt = beat.options.find((o) => o.id === selections[beat.id]);
    const mo = opt
      ? mergedOption(opt, overrides[beat.id]?.options?.[opt.id])
      : null;
    lines.push(
      `## ${i + 1}. ${mb.name}${mb.subtitle ? ` — ${mb.subtitle}` : ""}`,
    );
    if (mo) {
      lines.push(`**${mo.title}**`);
      if (mo.description) lines.push("");
      if (mo.description) lines.push(mo.description);
    } else {
      lines.push("_(unchosen)_");
    }
    lines.push("");
  });
  return lines.join("\n");
}

function buildFullBoardMarkdown(
  template: Template,
  selections: Record<string, string>,
  overrides: TemplateOverrides,
): string {
  const lines: string[] = [];
  lines.push(`# ${template.name}`);
  lines.push("");
  if (template.description) {
    lines.push(`> ${template.description}`);
    lines.push("");
  }
  lines.push("---");
  lines.push("");
  template.beats.forEach((beat, i) => {
    const mb = mergedBeat(beat, overrides[beat.id]);
    const chosenId = selections[beat.id];
    lines.push(
      `## ${i + 1}. ${mb.name}${mb.subtitle ? ` — ${mb.subtitle}` : ""}`,
    );
    if (mb.prompt) {
      lines.push(`*${mb.prompt}*`);
    }
    lines.push("");
    beat.options.forEach((option) => {
      const mo = mergedOption(option, overrides[beat.id]?.options?.[option.id]);
      const isChosen = option.id === chosenId;
      const marker = isChosen ? "**[CHOSEN]**" : "";
      lines.push(`### ${mo.title} ${marker}`);
      if (mo.description) {
        lines.push("");
        lines.push(mo.description);
      }
      lines.push("");
    });
    lines.push("---");
    lines.push("");
  });
  return lines.join("\n");
}

const STORAGE_KEY = "throughline:state:v1";

type PerTemplateState = {
  selections: Record<string, string>;
  committed: boolean;
  overrides?: TemplateOverrides;
};

type PersistedState = {
  templateId: string;
  perTemplate: Record<string, PerTemplateState>;
};

function loadPersisted(): PersistedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { templateId: templates[0].id, perTemplate: {} };
    const parsed = JSON.parse(raw) as PersistedState;
    if (!parsed.perTemplate || typeof parsed.templateId !== "string") {
      return { templateId: templates[0].id, perTemplate: {} };
    }
    return parsed;
  } catch {
    return { templateId: templates[0].id, perTemplate: {} };
  }
}

function savePersisted(state: PersistedState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // ignore quota / privacy-mode failures
  }
}

export default function App() {
  const [templateId, setTemplateId] = useState<string>(() => {
    const p = loadPersisted();
    return getTemplate(p.templateId) ? p.templateId : templates[0].id;
  });
  const [selections, setSelections] = useState<Record<string, string>>(
    () => loadPersisted().perTemplate[templateId]?.selections ?? {},
  );
  const [committed, setCommitted] = useState<boolean>(
    () => loadPersisted().perTemplate[templateId]?.committed ?? false,
  );
  const [overrides, setOverrides] = useState<TemplateOverrides>(
    () => loadPersisted().perTemplate[templateId]?.overrides ?? {},
  );
  const [copyHint, setCopyHint] = useState<string | null>(null);
  const [view, setView] = useState<"canvas" | "overview">("canvas");
  const [perTemplateSnapshot, setPerTemplateSnapshot] = useState<
    PersistedState["perTemplate"]
  >(() => loadPersisted().perTemplate);

  const template = getTemplate(templateId)!;

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    const per = loadPersisted().perTemplate[templateId];
    setSelections(per?.selections ?? {});
    setCommitted(per?.committed ?? false);
    setOverrides(per?.overrides ?? {});
  }, [templateId]);

  useEffect(() => {
    const prev = loadPersisted();
    const nextPerTemplate = {
      ...prev.perTemplate,
      [templateId]: { selections, committed, overrides },
    };
    savePersisted({ templateId, perTemplate: nextPerTemplate });
    setPerTemplateSnapshot(nextPerTemplate);
  }, [templateId, selections, committed, overrides]);

  const handleEditOption = useCallback(
    (
      beatId: string,
      optionId: string,
      field: "title" | "description",
      value: string,
    ) => {
      setOverrides((prev) => {
        const beat = prev[beatId] ?? {};
        const opts = beat.options ?? {};
        const opt = opts[optionId] ?? {};
        return {
          ...prev,
          [beatId]: {
            ...beat,
            options: { ...opts, [optionId]: { ...opt, [field]: value } },
          },
        };
      });
    },
    [],
  );

  const handleEditCluster = useCallback(
    (beatId: string, field: "name" | "subtitle" | "prompt", value: string) => {
      setOverrides((prev) => {
        const beat = prev[beatId] ?? {};
        const cluster = beat.cluster ?? {};
        return {
          ...prev,
          [beatId]: {
            ...beat,
            cluster: { ...cluster, [field]: value },
          },
        };
      });
    },
    [],
  );

  useEffect(() => {
    const fresh = buildNodes(
      template,
      selections,
      committed,
      overrides,
      handleEditOption,
      handleEditCluster,
    );
    setNodes((curr) => {
      const posMap = new Map(curr.map((n) => [n.id, n.position]));
      return fresh.map((n) => {
        const prev = posMap.get(n.id);
        return prev ? { ...n, position: prev } : n;
      });
    });
    setEdges(buildEdges(template, selections, committed));
  }, [
    template,
    selections,
    committed,
    overrides,
    handleEditOption,
    handleEditCluster,
    setNodes,
    setEdges,
  ]);

  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      if (committed) return;
      if (node.type !== "beatOption") return;
      const d = node.data as { beatId: string; optionId: string };
      setSelections((prev) => {
        if (prev[d.beatId] === d.optionId) {
          const next = { ...prev };
          delete next[d.beatId];
          return next;
        }
        return { ...prev, [d.beatId]: d.optionId };
      });
    },
    [committed],
  );

  const canCommit = Object.keys(selections).length === template.beats.length;

  const handleReset = useCallback(() => {
    setSelections({});
    setCommitted(false);
  }, []);

  const handleCommit = useCallback(() => {
    if (canCommit) setCommitted(true);
  }, [canCommit]);

  const handleUncommit = useCallback(() => setCommitted(false), []);

  const handleExport = useCallback(() => {
    const chosen = template.beats.map((b) => {
      const mb = mergedBeat(b, overrides[b.id]);
      const opt = b.options.find((o) => o.id === selections[b.id]);
      const mo = opt
        ? mergedOption(opt, overrides[b.id]?.options?.[opt.id])
        : null;
      return {
        beat: mb.name,
        subtitle: mb.subtitle ?? null,
        choice: mo?.title ?? null,
        description: mo?.description ?? null,
      };
    });
    const payload = {
      template: template.name,
      templateId: template.id,
      committed,
      exportedAt: new Date().toISOString(),
      beats: chosen,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `throughline-${template.id}-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [template, selections, committed, overrides]);

  const handleCopyMarkdown = useCallback(async () => {
    const md = buildMarkdown(template, selections, overrides);
    try {
      await navigator.clipboard.writeText(md);
      setCopyHint("Copied markdown to clipboard");
    } catch {
      setCopyHint("Clipboard blocked — see console");
      console.log(md);
    }
    setTimeout(() => setCopyHint(null), 1800);
  }, [template, selections, overrides]);

  const handleCopyAll = useCallback(async () => {
    const md = buildFullBoardMarkdown(template, selections, overrides);
    try {
      await navigator.clipboard.writeText(md);
      setCopyHint("Copied full board to clipboard");
    } catch {
      setCopyHint("Clipboard blocked — see console");
      console.log(md);
    }
    setTimeout(() => setCopyHint(null), 1800);
  }, [template, selections, overrides]);

  const handleOpenTemplate = useCallback((id: string) => {
    setTemplateId(id);
    setView("canvas");
  }, []);

  const handleToggleView = useCallback(() => {
    setView((v) => (v === "canvas" ? "overview" : "canvas"));
  }, []);

  return (
    <div className="app">
      <TopBar
        templates={templates}
        templateId={templateId}
        onTemplateChange={setTemplateId}
        committed={committed}
        canCommit={canCommit}
        onCommit={handleCommit}
        onUncommit={handleUncommit}
        view={view}
        onToggleView={handleToggleView}
      />
      <div className="main">
        {view === "overview" ? (
          <ThroughlineOverview
            templates={templates}
            perTemplate={perTemplateSnapshot}
            activeTemplateId={templateId}
            onOpenTemplate={handleOpenTemplate}
          />
        ) : (
          <>
            <div className="canvas-wrap">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onNodeClick={handleNodeClick}
                nodeTypes={nodeTypes}
                fitView
                fitViewOptions={{ padding: 0.18 }}
                minZoom={0.15}
                maxZoom={1.8}
                proOptions={{ hideAttribution: true }}
                zoomOnScroll
                selectionOnDrag
                deleteKeyCode={null}
                multiSelectionKeyCode={null}
              >
                <Background color="#ddd3c0" gap={28} size={1.4} />
                <Controls showInteractive={false} position="bottom-left" />
                <MiniMap
                  pannable
                  zoomable
                  nodeStrokeWidth={0}
                  nodeColor={(n) => {
                    if (n.type === "beatCluster") return "#ece5d7";
                    const d = n.data as { selected?: boolean } | undefined;
                    return d?.selected ? TL_ACTIVE : "#ffffff";
                  }}
                  maskColor="rgba(250, 247, 242, 0.7)"
                />
              </ReactFlow>
              {copyHint ? <div className="toast">{copyHint}</div> : null}
            </div>
            <SidePanel
              template={template}
              selections={selections}
              committed={committed}
              overrides={overrides}
              onReset={handleReset}
              onExport={handleExport}
              onCopyMarkdown={handleCopyMarkdown}
              onCopyAll={handleCopyAll}
            />
          </>
        )}
      </div>
    </div>
  );
}
