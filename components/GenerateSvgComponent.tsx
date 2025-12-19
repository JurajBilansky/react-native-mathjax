import { getAdaptor } from "../lib/liteAdaptor";
import { RenderSvgComponent } from "./RenderSvgComponent";

export const GenerateSvgComponent = ({
  item,
  fontSize,
  color,
}: {
  item: unknown; // môžeš sprísniť, ak chceš
  fontSize: number;
  color: string;
}) => {
  const adaptor = getAdaptor();
  const svgText = adaptor.innerHTML(item as any) as string;

  return <RenderSvgComponent svg={svgText} fontSize={fontSize} color={color} />;
};
