# React Native MathJax HTML to SVG

A React Native component for rendering mathematical formulas (TeX/LaTeX) to SVG without WebView. Uses MathJax for high-quality mathematical typesetting.

## Features

- 🚀 No WebView required - pure native rendering
- 📐 Full TeX/LaTeX support with all packages
- 🎨 Customizable font size and color
- 📱 Works with Expo and React Native CLI
- 💾 Optional font caching for better performance

## Installation

### With React Native CLI
```bash
npm install react-native-mathjax-html-to-svg react-native-svg
cd ios && pod install
```

### With Expo
```bash
npx expo install react-native-mathjax-html-to-svg react-native-svg
```

## Usage

### Basic Example
```jsx
import { MathJaxSvg } from 'react-native-mathjax-html-to-svg';

export default function App() {
  return (
    <MathJaxSvg fontSize={20} color="#000000">
      {'$$E = mc^2$$'}
    </MathJaxSvg>
  );
}
```

### Advanced Examples
```jsx
// Pythagorean theorem
<MathJaxSvg fontSize={18} color="blue">
  {'$$a^2 + b^2 = c^2$$'}
</MathJaxSvg>

// Quadratic formula
<MathJaxSvg fontSize={16} color="green">
  {'$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$'}
</MathJaxSvg>

// Integral
<MathJaxSvg fontSize={20} color="red">
  {'$$\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$'}
</MathJaxSvg>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | Required | TeX/LaTeX formula to render (use `$$...$$` for display math) |
| `fontSize` | `number` | `14` | Font size in pixels |
| `color` | `string` | `"#000000"` | Text color (hex or named color) |
| `fontCache` | `boolean` | `false` | Enable MathJax font caching for better performance |
| `style` | `ViewStyle` | `{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' }` | Container style |
| `textStyle` | `TextStyle` | `undefined` | Text style for non-math content |

## Example App

The repository includes an Expo example app with various mathematical formulas:

```bash
cd example
npm install
npm start
```

## Supported TeX Packages

All standard TeX/LaTeX packages are supported including:
- AMS math packages (ams, amscd, amssymb)
- Physics and chemistry (physics, mhchem)
- Advanced formatting (color, bbox, cancel)
- And many more...

## License

MIT

## Development

### Building from source
```bash
npm install
npm run build
```

The build process:
1. Compiles TypeScript to JavaScript
2. Copies MathJax engine files to `dist/`
3. Includes MathJax NewCM font with proper metrics
