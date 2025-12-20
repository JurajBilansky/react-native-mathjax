import React from "react";
import { getAdaptor } from "../lib/liteAdaptor";
import { type LiteElement } from "../mathjax/adaptors/lite/Element";
import { RenderSvgComponent } from "./RenderSvgComponent";

export const GenerateSvgComponent = ({
  item,
  fontSize,
  color,
}: {
  item: LiteElement;
  fontSize: number;
  color: string;
  [key: string]: any; // Allow React props
}) => {
  const adaptor = getAdaptor();
  const svgText = adaptor.innerHTML(item) || "";

  return <RenderSvgComponent svg={svgText} fontSize={fontSize} color={color} />;
};
