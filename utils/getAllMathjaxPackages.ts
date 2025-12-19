import { AllPackages } from "../mathjax/input/tex/AllPackages";

export const packageList = AllPackages.sort()
  .join(", ")
  .split(/\s*,\s*/);
