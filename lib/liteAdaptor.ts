import "../mjs/util/entities/all.js";
import { liteAdaptor } from "../mjs/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "../mjs/handlers/html.js";

type LiteAdaptorInstance = ReturnType<typeof liteAdaptor>;

let adaptorInstance: LiteAdaptorInstance | null = null;

export const getAdaptor = (): LiteAdaptorInstance => {
  if (!adaptorInstance) {
    adaptorInstance = liteAdaptor();
    RegisterHTMLHandler(adaptorInstance);
  }
  return adaptorInstance;
};
