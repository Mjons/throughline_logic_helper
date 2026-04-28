import type { Template } from "../types";
import { raskinTemplate } from "./raskin";
import { raskinIpHoldersTemplate } from "./raskin-ip-holders";
import { raskinCreatorsTemplate } from "./raskin-creators";
import { panelHausWhitepaperTemplate } from "./panel-haus-whitepaper";
import { delphicaEnterpriseTemplate } from "./delphica-enterprise";
import { delphicaPriviaTemplate } from "./delphica-privia";
import { raskinDelphicaTemplate } from "./raskin-delphica";

export const templates: Template[] = [
  raskinTemplate,
  raskinIpHoldersTemplate,
  raskinCreatorsTemplate,
  panelHausWhitepaperTemplate,
  delphicaEnterpriseTemplate,
  delphicaPriviaTemplate,
  raskinDelphicaTemplate,
];

export function getTemplate(id: string): Template | undefined {
  return templates.find((t) => t.id === id);
}
