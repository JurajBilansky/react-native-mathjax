import { SvgFontData, SvgCharOptions, SvgVariantData, SvgDelimiterData, DelimiterMap, CharMapMap } from '../output/svg/FontData.js';
import { OptionList } from '../util/Options.js';
declare const Base: import("../output/common/FontData.js").FontDataClass<SvgCharOptions, SvgVariantData, SvgDelimiterData> & typeof SvgFontData;
export declare class MathJaxNewcmFont extends Base {
    static NAME: string;
    static OPTIONS: {
        dynamicPrefix: string;
    };
    protected static defaultDelimiters: DelimiterMap<SvgDelimiterData>;
    protected static defaultChars: CharMapMap<SvgCharOptions>;
    protected static dynamicFiles: import("../output/common/FontData.js").DynamicFileList;
    protected static variantCacheIds: {
        [name: string]: string;
    };
    constructor(options?: OptionList);
}
export {};
