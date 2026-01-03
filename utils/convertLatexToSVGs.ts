import { getAdaptor } from "../lib/liteAdaptor";
import { mathjax } from "../mathjax/mathjax";
import { TeX } from "../mathjax/input/tex-full";
import { SVG } from "../mathjax/output/svg.js";
import { packageList } from "./getAllMathjaxPackages";

export interface ConvertLatexToSVGsOptions {
  fontCache?: boolean;
  macros?: Record<string, string | [string, number]>;
}

/**
 * Convert LaTeX string to an array of SVG strings
 * @param texString - The LaTeX string to convert
 * @param options - Optional configuration (fontCache, macros)
 * @returns Array of SVG strings
 */
export const convertLatexToSVGs = (
  texString: string,
  options?: ConvertLatexToSVGsOptions
): string[] => {
  if (!texString) {
    return [];
  }

  const adaptor = getAdaptor();

  const tex = new TeX({
    packages: packageList,
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
    macros: options?.macros || {},
  });

  const svg = new SVG({
    fontCache: options?.fontCache ? "local" : "none",
    merrorInheritFont: true,
  });

  const html = mathjax.document(texString, {
    InputJax: tex,
    OutputJax: svg,
    renderActions: { assistiveMml: [] },
  });

  html.render();

  if (Array.from(html.math).length === 0) {
    //@ts-expect-error type mismatch
    adaptor.remove(html.outputJax.svgStyles);
    const cache = adaptor.elementById(
      adaptor.body(html.document),
      "MJX-SVG-global-cache"
    );
    if (cache) adaptor.remove(cache);
  }

  const nodes = adaptor.childNodes(adaptor.body(html.document)) as any[];
  const svgs: string[] = [];

  for (const node of nodes) {
    const htmlContent = adaptor.innerHTML(node) || "";
    // Extract all SVG elements (MathJax may create multiple SVGs with mjx-break between them)
    const svgMatches = htmlContent.match(/<svg[^>]*>[\s\S]*?<\/svg>/g) || [];
    svgs.push(...svgMatches);
  }

  return svgs;
};
