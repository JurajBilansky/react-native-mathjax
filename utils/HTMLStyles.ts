import {
    PERC_SUPPORTED_STYLES,
    STYLESETS,
    ABSOLUTE_FONT_SIZE,
    stylePropTypes,
} from './HTMLUtils';

interface CssObject {
    [key: string]: string;
}

interface CssToRNStyleOptions {
    emSize: number;
    ptSize: number;
    ignoredStyles?: string[];
    allowedStyles?: string[];
}

/**
 * Converts a html style string to an object
 * @param str: the style string
 * @return the style as an object
 */
export function cssStringToObject(str: string): CssObject {
    return str
        .split(';')
        .map((prop) => prop.split(':'))
        .reduce((acc: CssObject, prop) => {
            if (prop.length === 2) {
                acc[prop[0].trim()] = prop[1].trim();
            }
            return acc;
        }, {});
}

/**
 * Converts a html style to its equivalent react native style
 * @param css: object of key value css strings
 * @param styleset: the styleset to convert the styles against
 * @param options: { emSize, ptSize, ignoredStyles, allowedStyles }
 * @returns {object}
 */
function cssToRNStyle(
    css: CssObject,
    styleset: string,
    { emSize, ptSize, ignoredStyles, allowedStyles }: CssToRNStyleOptions
): any {
    const styleProps = stylePropTypes[styleset];
    return Object.keys(css)
        .filter((key) => (allowedStyles ? allowedStyles.indexOf(key) !== -1 : true))
        .filter((key) => (ignoredStyles || []).indexOf(key) === -1)
        .map((key) => [key, css[key]])
        .map(([key, value]) => {
            // Key convert
            return [
                key
                    .split('-')
                    .map((item, index) =>
                        index === 0 ? item : item[0].toUpperCase() + item.substr(1)
                    )
                    .join(''),
                value,
            ];
        })
        .map(([key, value]) => {
            if (styleProps.indexOf(key) === -1) {
                return undefined;
            }

            if (typeof value === 'string') {
                value = value.replace(/\s*!\s*important/, '');

                if (key === 'textDecoration') {
                    key = 'textDecorationLine';
                }

                if (key === 'display' && ['flex', 'none'].indexOf(value) === -1) {
                    return [key, 'flex'];
                }
                if (key === 'textAlign') {
                    if (
                        ['left', 'right', 'justify', 'auto', 'center'].indexOf(value) !== -1
                    ) {
                        return [key, value];
                    }
                    if (value === 'start') {
                        return [key, 'left'];
                    }
                    if (value === 'end') {
                        return [key, 'right'];
                    }
                    return undefined;
                }
                if (
                    value
                        .replace(/[-_]/g, '')
                        .search(/\binherit\b|\bnormal\b|\bnone\b|(calc|var)\(.*\)/) !== -1
                ) {
                    return undefined;
                }
                // See if we can use the percentage directly
                if (
                    value.search(/[\d.]+%/) !== -1 &&
                    PERC_SUPPORTED_STYLES.indexOf(key) !== -1
                ) {
                    return [key, value];
                }
                if (value.search(/[\d.]+em/) !== -1) {
                    const pxSize = parseFloat(value.replace('em', '')) * emSize;
                    return [key, pxSize];
                }
                if (value.search(/[\d.]+pt/) !== -1) {
                    const pxSize = parseFloat(value.replace('pt', '')) * ptSize;
                    return [key, pxSize];
                }
                // See if we can convert a 20px to a 20 automagically
                const numericValue = parseFloat(value.replace('px', ''));
                if (key !== 'fontWeight' && !isNaN(numericValue)) {
                    if (styleProps.indexOf(key) !== -1) {
                        return [key, numericValue];
                    }
                }
                if (key === 'fontSize') {
                    return mapAbsoluteFontSize(key, value);
                }
            }
            return [key, value];
        })
        .filter((prop): prop is [string, any] => prop !== undefined)
        .reduce((acc: any, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
}

/**
 * @param key: the key of style
 * @param value: the value of style
 * @return {array}
 */
function mapAbsoluteFontSize(key: string, value: string): [string, string] {
    let fontSize = value;
    if (ABSOLUTE_FONT_SIZE.hasOwnProperty(value)) {
        fontSize = ABSOLUTE_FONT_SIZE[value];
    }
    return [key, fontSize];
}

/**
 * @param str: the css style string
 * @param styleset: the styleset to convert the styles against
 * @return a react native style object
 */
export function cssStringToRNStyle(str: string, styleset: string = STYLESETS.TEXT): any {
    return cssToRNStyle(cssStringToObject(str), styleset, { emSize: 1, ptSize: 1 });
}
