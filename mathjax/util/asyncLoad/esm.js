var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { mathjax } from '../../mathjax.js';
import { context } from '../context.js';
// React Native doesn't support import.meta.url or dynamic imports
let root = '';
if (!mathjax.asyncLoad) {
    mathjax.asyncLoad = (name) => __awaiter(void 0, void 0, void 0, function* () {
        // Dynamic imports are not supported in React Native
        // Return a rejected promise
        return Promise.reject(new Error('Dynamic module loading is not supported in React Native'));
    });
}
export function setBaseURL(url) {
    root = new URL(context.path(url), 'file://').href;
    if (!root.match(/\/$/)) {
        root += '/';
    }
}
//# sourceMappingURL=esm.js.map