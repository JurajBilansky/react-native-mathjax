export const getScale = (_svgString: string): [number, number] => {
  const match = _svgString.match(/<svg([^\>]+)>/gi);

  if (!match) {
    // môžeš zvoliť buď fallback alebo throw
    return [0, 0];
    // throw new Error("SVG tag not found");
  }

  const svgString = match.join("");

  let [width, height] = (svgString || "")
    .replace(
      /.* width=\"([\d\.]*)[ep]x\".*height=\"([\d\.]*)[ep]x\".*/gi,
      "$1,$2"
    )
    .split(",");

  return [parseFloat(width), parseFloat(height)];
};

export const applyScale = (
  svgString: string,
  [width, height]: [number, number]
): string => {
  let retSvgString = svgString.replace(
    /(<svg[^\>]+height=\")([\d\.]+)([ep]x\"[^\>]+>)/gi,
    `$1${height}$3`
  );

  retSvgString = retSvgString.replace(
    /(<svg[^\>]+width=\")([\d\.]+)([ep]x\"[^\>]+>)/gi,
    `$1${width}$3`
  );

  retSvgString = retSvgString.replace(
    /(<svg[^\>]+width=\")([0]+[ep]?x?)(\"[^\>]+>)/gi,
    "$10$3"
  );

  retSvgString = retSvgString.replace(
    /(<svg[^\>]+height=\")([0]+[ep]?x?)(\"[^\>]+>)/gi,
    "$10$3"
  );

  return retSvgString;
};

export const applyColor = (svgString: string, fillColor: string): string => {
  return svgString.replace(/currentColor/gim, fillColor);
};
