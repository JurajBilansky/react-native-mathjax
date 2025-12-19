import "@mathjax/src/mjs/util/entities/all.js";
import { liteAdaptor } from "@mathjax/src/js/adaptors/liteAdaptor.js";
import { RegisterHTMLHandler } from "@mathjax/src/js/handlers/html.js";

type LiteAdaptorInstance = ReturnType<typeof liteAdaptor>;

let adaptorInstance: LiteAdaptorInstance | null = null;

export const getAdaptor = (): LiteAdaptorInstance => {
  if (!adaptorInstance) {
    adaptorInstance = liteAdaptor();
    RegisterHTMLHandler(adaptorInstance);
  }
  return adaptorInstance;
};
