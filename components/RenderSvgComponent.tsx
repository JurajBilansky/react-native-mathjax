import { Text } from "react-native";
import { SvgFromXml } from "react-native-svg";
import { applyColor, applyScale, getScale } from "../utils/svgUtils";

export const RenderSvgComponent = ({
  svg,
  fontSize,
  color,
}: {
  svg: string;
  fontSize: number;
  color: string;
}) => {
  let svgText = svg;
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
