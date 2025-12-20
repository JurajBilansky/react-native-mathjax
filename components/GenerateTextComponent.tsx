import React, { Fragment } from "react";
import { Text, type TextStyle } from "react-native";
import { getAdaptor } from "../lib/liteAdaptor";
import { cssStringToRNStyle } from "../utils/HTMLStyles";
import { decode } from "html-entities";
import { GenerateSvgComponent } from "./GenerateSvgComponent";
import { tagToStyle } from "../contants/tagToStyles";
import { type LiteElement } from "../mjs/adaptors/lite/Element";

export const GenerateTextComponent = ({
  fontSize,
  color,
  index,
  item,
  parentStyle = null,
  textStyle,
}: {
  fontSize: number;
  color: string;
  index: number;
  item: LiteElement; // ak chceš, vieme neskôr sprísniť typ
  parentStyle?: TextStyle | null;
  textStyle?: TextStyle;
}): JSX.Element | null => {
  let rnStyle: TextStyle | null = null;
  let text: string | null = null;
  const adaptor = getAdaptor();
  if (
    item?.kind !== "#text" &&
    item?.kind !== "mjx-container" &&
    item?.kind !== "#comment"
  ) {
    const htmlStyle = adaptor.allStyles(item) || null;

    if (htmlStyle) {
      rnStyle = cssStringToRNStyle(htmlStyle) as TextStyle;
    }

    rnStyle = {
      ...(tagToStyle[item?.kind as keyof typeof tagToStyle] ?? {}),
      ...(rnStyle ?? {}),
    };
  }

  if (item?.kind === "#text") {
    text = decode(adaptor.value(item) || "");
    rnStyle = parentStyle ?? null;
  } else if (item?.kind === "br") {
    text = "\n\n";
    rnStyle = {
      width: "100%",
      overflow: "hidden",
      height: 0,
    } as TextStyle;
  }

  return (
    <Fragment>
      {text ? (
        <Text
          key={`sub-${index}`}
          style={[
            {
              fontSize: fontSize * 2,
              color,
              ...(rnStyle ?? {}),
            },
            textStyle,
          ]}
        >
          {text}
        </Text>
      ) : item?.kind === "mjx-container" ? (
        <GenerateSvgComponent
          key={`sub-${index}`}
          item={item}
          fontSize={fontSize}
          color={color}
        />
      ) : item.children?.length ? (
        item.children.map((subItem: any, subIndex: number) => (
          <GenerateTextComponent
            key={`sub-${index}-${subIndex}`}
            color={color}
            fontSize={fontSize}
            item={subItem}
            index={subIndex}
            parentStyle={rnStyle ?? undefined}
          />
        ))
      ) : null}
    </Fragment>
  );
};
