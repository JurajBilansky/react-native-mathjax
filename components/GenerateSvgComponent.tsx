import { Text } from "react-native";
import { SvgFromXml } from "react-native-svg";
import { getAdaptor } from "../lib/liteAdaptor";
import { applyColor, applyScale, getScale } from "../utils/svgUtils";

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
  let svgText = adaptor.innerHTML(item as any) as string;

  const [width, height] = getScale(svgText);

  svgText = svgText.replace(/font-family=\"([^\"]*)\"/gim, "");

  svgText = applyScale(svgText, [width * fontSize, height * fontSize]);

  svgText = applyColor(svgText, color);

  return (
    <Text>
      <SvgFromXml xml={svgText} />
    </Text>
  );
};
