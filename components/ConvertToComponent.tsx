import React, { Fragment } from "react";
import { TextStyle } from "react-native";
import { mathjax } from "../mathjax/mathjax";
import { TeX } from "../mathjax/input/tex-full.js";
import { SVG } from "../mathjax/output/svg.js";
import { packageList } from "../utils/getAllMathjaxPackages";
import { getAdaptor } from "../lib/liteAdaptor";
import { GenerateTextComponent } from "./GenerateTextComponent";

export const ConvertToComponent = ({
  texString = "",
  fontSize = 12,
  fontCache = false,
  color,
  textStyle,
}: {
  texString?: string;
  fontSize?: number;
  fontCache?: boolean;
  color: string;
  textStyle?: TextStyle;
}): React.ReactNode => {
  const adaptor = getAdaptor();

  if (!texString) {
    return "";
  }

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
  });

  const svg = new SVG({
    fontCache: fontCache ? "local" : "none",
    mtextInheritFont: true,
    merrorInheritFont: true,
    scale: 1,
    minScale: 0.5,
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

  return (
    <Fragment>
      {nodes?.map((item: any, index: number) => (
        // @ts-ignore
        <GenerateTextComponent
          key={index}
          textStyle={textStyle}
          item={item}
          index={index}
          fontSize={fontSize}
          color={color}
        />
      ))}
    </Fragment>
  );
};
