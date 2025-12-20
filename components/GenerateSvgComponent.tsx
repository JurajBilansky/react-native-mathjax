import React from "react";
import { getAdaptor } from "../lib/liteAdaptor";
import { type LiteElement } from "../mjs/adaptors/lite/Element";
import { RenderSvgComponent } from "./RenderSvgComponent";

export const GenerateSvgComponent = ({
  item,
  fontSize,
  color,
}: {
  item: LiteElement; // môžeš sprísniť, ak chceš
  fontSize: number;
  color: string;
}) => {
  const adaptor = getAdaptor();
  const svgText = adaptor.innerHTML(item) || "";

  return <RenderSvgComponent svg={svgText} fontSize={fontSize} color={color} />;
};
