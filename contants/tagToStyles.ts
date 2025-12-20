import type { TextStyle } from "react-native";

export const tagToStyle: Record<string, Partial<TextStyle>> = {
  u: { textDecorationLine: "underline" },
  ins: { textDecorationLine: "underline" },
  s: { textDecorationLine: "line-through" },
  del: { textDecorationLine: "line-through" },
  b: { fontWeight: "bold" },
  strong: { fontWeight: "bold" },
  i: { fontStyle: "italic" },
  cite: { fontStyle: "italic" },
  dfn: { fontStyle: "italic" },
  em: { fontStyle: "italic" },
  mark: { backgroundColor: "yellow" },
  small: { fontSize: 8 },
};
