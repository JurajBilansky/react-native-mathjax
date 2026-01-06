// Import all dynamic font files statically for React Native compatibility
// React Native doesn't support dynamic imports, so we need to import all fonts upfront

// Import all SVG dynamic fonts
import '../fonts/svg/dynamic/latin.js';
import '../fonts/svg/dynamic/latin-b.js';
import '../fonts/svg/dynamic/latin-i.js';
import '../fonts/svg/dynamic/latin-bi.js';
import '../fonts/svg/dynamic/double-struck.js';
import '../fonts/svg/dynamic/fraktur.js';
import '../fonts/svg/dynamic/script.js';
import '../fonts/svg/dynamic/sans-serif.js';
import '../fonts/svg/dynamic/sans-serif-b.js';
import '../fonts/svg/dynamic/sans-serif-i.js';
import '../fonts/svg/dynamic/sans-serif-bi.js';
import '../fonts/svg/dynamic/monospace.js';
import '../fonts/svg/dynamic/monospace-l.js';
import '../fonts/svg/dynamic/monospace-ex.js';
import '../fonts/svg/dynamic/calligraphic.js';
import '../fonts/svg/dynamic/greek.js';
import '../fonts/svg/dynamic/greek-ss.js';
import '../fonts/svg/dynamic/cyrillic.js';
import '../fonts/svg/dynamic/cyrillic-ss.js';
import '../fonts/svg/dynamic/arabic.js';
import '../fonts/svg/dynamic/hebrew.js';
import '../fonts/svg/dynamic/devanagari.js';
import '../fonts/svg/dynamic/cherokee.js';
import '../fonts/svg/dynamic/braille.js';
import '../fonts/svg/dynamic/braille-d.js';
import '../fonts/svg/dynamic/phonetics.js';
import '../fonts/svg/dynamic/phonetics-ss.js';
import '../fonts/svg/dynamic/math.js';
import '../fonts/svg/dynamic/symbols.js';
import '../fonts/svg/dynamic/symbols-b-i.js';
import '../fonts/svg/dynamic/arrows.js';
import '../fonts/svg/dynamic/marrows.js';
import '../fonts/svg/dynamic/shapes.js';
import '../fonts/svg/dynamic/mshapes.js';
import '../fonts/svg/dynamic/accents.js';
import '../fonts/svg/dynamic/accents-b-i.js';
import '../fonts/svg/dynamic/variants.js';
import '../fonts/svg/dynamic/PUA.js';

// Export the main SVG font with all fonts preloaded
export { MathJaxNewcmFont } from './svg.js';
