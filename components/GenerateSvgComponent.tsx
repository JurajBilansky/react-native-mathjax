import React from "react";
import { getAdaptor } from "../lib/liteAdaptor";
import { type LiteElement } from "../mathjax/adaptors/lite/Element";
import { RenderSvgComponent } from "./RenderSvgComponent";

interface GenerateSvgProps {
  item: LiteElement;
  fontSize: number;
  color: string;
}

export const GenerateSvgComponent: React.FC<GenerateSvgProps> = ({
  item,
  fontSize,
  color,
}) => {
  const adaptor = getAdaptor();
  const htmlContent = adaptor.innerHTML(item) || "";
  
  // Extract all SVG elements (MathJax may create multiple SVGs with mjx-break between them)
  const svgMatches = htmlContent.match(/<svg[^>]*>[\s\S]*?<\/svg>/g) || [];
  
  if (svgMatches.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      {svgMatches.map((svgText, index) => (
        <RenderSvgComponent 
          key={index}
          svg={svgText} 
          fontSize={fontSize} 
          color={color} 
        />
      ))}
    </React.Fragment>
  );
};
