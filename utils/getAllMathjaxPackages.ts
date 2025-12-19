import { source } from "@mathjax/src/components/mjs/source.js";

const load = Object.keys(source)
  .filter((n) => n.startsWith("[tex]/"))
  .sort();

export const packageList = ["base", ...load.map((n) => n.substring(6))];
export const texLoadList = load;
