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
  options: BeatOption[];
};

export type SequencingNotes = {
  originStoryInsertion?: string;
  demoPlacement?: string;
  seededQAndA?: string[];
  [key: string]: string | string[] | undefined;
};

export type Template = {
  id: string;
  name: string;
  description: string;
  beats: Beat[];
  sequencingNotes?: SequencingNotes;
};
