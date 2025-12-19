import React, { memo } from "react";
import { View, type ViewStyle, type TextStyle } from "react-native";
import { ConvertToComponent } from "./ConvertToComponent";

export const MathJaxSvg = memo(
  (props: {
    children?: string;
    fontSize?: number;
    color?: string;
    fontCache?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
  }): JSX.Element => {
    const textext = props.children || "";
    const fontSize = props.fontSize ? props.fontSize / 2 : 14;
    const color = props.color ? props.color : "black";
    const fontCache = props.fontCache;
    const style = props.style;

    return (
      <View
        style={[
          {
            flexDirection: "row",
            flexWrap: "wrap",
            flexShrink: 1,
            alignItems: "center",
          },
          style,
        ]}
      >
        {textext ? (
          <ConvertToComponent
            textStyle={props.textStyle}
            fontSize={fontSize}
            color={color}
            texString={textext}
            fontCache={fontCache}
          />
        ) : null}
      </View>
    );
  }
);
