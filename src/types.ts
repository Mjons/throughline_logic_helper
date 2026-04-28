export type OptionSourceType = "user" | "research" | "hybrid" | "manual";

export type OptionSource = {
  type: OptionSourceType;
  citations?: string[];
  generatedBy?: string;
  generatedAt?: string;
  edited?: boolean;
};

export type BeatOption = {
  id: string;
  title: string;
  description?: string;
  chosen?: boolean;
  spokenLine?: string;
  rejectedBecause?: string;
  permissionBoundary?: string;
  source?: OptionSource;
};

export type Beat = {
  id: string;
  name: string;
  subtitle?: string;
  prompt?: string;
  contextHint?: string;
  options: BeatOption[];
};

export type SequencingNotes = {
  originStoryInsertion?: string;
  demoPlacement?: string;
  seededQAndA?: string[];
  [key: string]: string | string[] | undefined;
};

export type ToneLevel = 1 | 2 | 3 | 4 | 5;

export type Template = {
  id: string;
  name: string;
  title?: string;
  description: string;
  audience?: string;
  tone?: ToneLevel;
  beats: Beat[];
  sequencingNotes?: SequencingNotes;
};
