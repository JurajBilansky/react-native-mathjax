import { StyleSheet, View, Text, ScrollView } from "react-native";
import { MathJaxSvg } from "react-native-mathjax-html-to-svg";

const mathExamples = [
  {
    section: "Basic Math",
    examples: [
      {
        label: "Display mode:",
        math: "$$E = mc^{2}$$",
        fontSize: 20,
        color: "black",
      },
      {
        label: "Inline mode:",
        math: "The famous equation $E = mc^{2}$ relates energy and mass.",
        fontSize: 16,
        color: "black",
      },
      {
        math: "Quadratic formula (inline): $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
        fontSize: 16,
        color: "#333",
      },
      {
        math: "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$",
        fontSize: 18,
        color: "#333",
      },
    ],
  },
  {
    section: "AMS (Advanced Math)",
    examples: [
      {
        label: "Matrix (display):",
        math: "$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$",
        fontSize: 18,
        color: "#0066cc",
      },
      {
        math: "Matrix inline: $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$ in text.",
        fontSize: 16,
        color: "#0066cc",
      },
      {
        label: "Cases (display):",
        math: "$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$",
        fontSize: 18,
        color: "#0066cc",
      },
      {
        math: "Inline cases: $f(x) = \\begin{cases} 1 & x > 0 \\\\ 0 & x \\leq 0 \\end{cases}$",
        fontSize: 14,
        color: "#0066cc",
      },
    ],
  },
  {
    section: "Calculus",
    examples: [
      {
        label: "Integral (display):",
        math: "$$\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$",
        fontSize: 20,
        color: "#006600",
      },
      {
        math: "Inline integral: $\\int_0^1 x^2 dx = \\frac{1}{3}$",
        fontSize: 16,
        color: "#006600",
      },
      {
        label: "Double integral (display):",
        math: "$$\\iint_D f(x,y)\\,dx\\,dy$$",
        fontSize: 18,
        color: "#006600",
      },
      {
        label: "Limit inline natural:",
        math: "$\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
        fontSize: 16,
        color: "#006600",
      },
      {
        label: "Limit inline with displaystyle:",
        math: "$\\displaystyle\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1$",
        fontSize: 16,
        color: "#006600",
      },
      {
        label: "Limit display:",
        math: "$$\\lim_{x \\to \\infty} \\frac{1}{x} = 0$$",
        fontSize: 18,
        color: "#006600",
      },
    ],
  },
  {
    section: "Chemistry (mhchem)",
    examples: [
      {
        label: "Display mode:",
        math: "$$\\ce{2H2 + O2 -> 2H2O}$$",
        fontSize: 18,
        color: "#cc0066",
      },
      {
        math: "Inline chemistry: $\\ce{H2O}$ is water, $\\ce{CO2}$ is carbon dioxide.",
        fontSize: 16,
        color: "#cc0066",
      },
      {
        label: "Precipitation (display):",
        math: "$$\\ce{SO4^2- + Ba^2+ -> BaSO4 v}$$",
        fontSize: 16,
        color: "#cc0066",
      },
      {
        math: "Reversible reaction (inline): $\\ce{H2O <=> H+ + OH-}$",
        fontSize: 14,
        color: "#cc0066",
      },
    ],
  },
  {
    section: "Physics Package",
    examples: [
      {
        label: "Bra-ket (display):",
        math: "$$\\bra{\\psi}\\ket{\\phi}$$",
        fontSize: 18,
        color: "#9900cc",
      },
      {
        math: "Inline bra-ket: $\\braket{\\psi|\\phi}$ represents inner product.",
        fontSize: 16,
        color: "#9900cc",
      },
      {
        label: "Derivative (display):",
        math: "$$\\dv{x}{t} = v$$",
        fontSize: 18,
        color: "#9900cc",
      },
      {
        math: "Partial derivative inline: $\\pdv{f}{x}$ and display:",
        fontSize: 16,
        color: "#9900cc",
      },
      {
        math: "$$\\pdv[2]{f}{x}$$",
        fontSize: 18,
        color: "#9900cc",
      },
    ],
  },
  {
    section: "Special Symbols",
    examples: [
      {
        label: "Greek letters (display):",
        math: "$$\\alpha, \\beta, \\gamma, \\Delta, \\Omega$$",
        fontSize: 18,
        color: "#ff6600",
      },
      {
        math: "Inline Greek: Variables $\\alpha$, $\\beta$, and $\\gamma$ are common.",
        fontSize: 16,
        color: "#ff6600",
      },
      {
        label: "Set theory (display):",
        math: "$$\\mathbb{R}, \\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}$$",
        fontSize: 18,
        color: "#ff6600",
      },
      {
        math: "Inline sets: $x \\in \\mathbb{R}$ means x is a real number.",
        fontSize: 16,
        color: "#ff6600",
      },
    ],
  },
  {
    section: "Cancel Package",
    examples: [
      {
        label: "Cancellation (display):",
        math: "$$\\frac{\\cancel{5}x}{\\cancel{5}} = x$$",
        fontSize: 20,
        color: "#cc0000",
      },
      {
        label: "Inline cancel: Simplify",
        math: "$\\frac{\\cancel{x} + 2\\cancel{x}}{\\cancel{x}} = 3$",
        fontSize: 16,
        color: "#cc0000",
      },
    ],
  },
  {
    section: "Color Package",
    examples: [
      {
        label: "Colored (display):",
        math: "$$\\color{red}{x} + \\color{blue}{y} = \\color{green}{z}$$",
        fontSize: 20,
        color: "black",
      },
      {
        math: "Inline colors: $\\color{red}{important}$ text in $\\color{blue}{equations}$.",
        fontSize: 16,
        color: "black",
      },
    ],
  },
  {
    section: "Bold Symbols",
    examples: [
      {
        label: "Bold vectors (display):",
        math: "$$\\boldsymbol{v} = \\boldsymbol{\\nabla} \\times \\boldsymbol{A}$$",
        fontSize: 20,
        color: "black",
      },
      {
        math: "Inline bold: Vector $\\boldsymbol{F} = m\\boldsymbol{a}$",
        fontSize: 16,
        color: "black",
      },
    ],
  },
  {
    section: "Unicode Package",
    examples: [
      {
        label: "Unicode (display):",
        math: "$$♠ ♣ ♥ ♦$$",
        fontSize: 18,
        color: "black",
      },
      {
        math: "Inline Unicode: Card symbols $♠$ and $♥$",
        fontSize: 16,
        color: "black",
      },
    ],
  },
  {
    section: "All MathJax Packages Test",
    examples: [
      {
        math: "Einstein showed that $E = mc^2$, where $E$ is energy, $m$ is mass, and $c$ is the speed of light.",
        fontSize: 16,
        color: "#0066cc",
      },
      {
        label: "Complex derivative:",
        math: "$$\\dfrac{\\mathrm{d}}{\\mathrm{d}x}c\\bigm|_{x=a\\text{ text}}\\dfrac{\\mathrm{d}}{\\mathrm{d}x}a\\bigm|_{x=c}$$",
        fontSize: 18,
        color: "#9900cc",
        isBlock: true,
      },
    ],
  },
  {
    section: "Alternative Delimiters",
    examples: [
      {
        label: "Standard inline ($):",
        math: "The equation $x^2 + y^2 = z^2$ is Pythagorean.",
        fontSize: 16,
        color: "#000000",
      },
      {
        label: "Alternative inline \\(\\):",
        math: "The equation \\(x^2 + y^2 = z^2\\) is Pythagorean.",
        fontSize: 16,
        color: "#000000",
      },
      {
        label: "Standard display ($$):",
        math: "$$\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}$$",
        fontSize: 18,
        color: "#0066cc",
        isBlock: true,
      },
      {
        label: "Alternative display \\[\\]:",
        math: "\\[\\sum_{i=1}^{n} i = \\frac{n(n+1)}{2}\\]",
        fontSize: 18,
        color: "#0066cc",
        isBlock: true,
      },
    ],
  },
];

export default function MathJaxTestScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MathJax Comprehensive Test</Text>

      {mathExamples.map((section, sectionIndex) => (
        <View key={sectionIndex}>
          <Text style={styles.sectionTitle}>{section.section}</Text>

          {section.examples.map((example, exampleIndex) => (
            <View
              key={exampleIndex}
              style={[
                styles.exampleContainer,
                example.isBlock && {
                  flexDirection: "column",
                  alignItems: "flex-start",
                },
              ]}
            >
              {example.label && (
                <Text style={styles.label}>{example.label}</Text>
              )}
              <MathJaxSvg
                fontSize={example.fontSize}
                color={example.color}
                style={example.isBlock ? { marginTop: 5 } : undefined}
              >
                {example.math}
              </MathJaxSvg>
            </View>
          ))}
        </View>
      ))}

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 30,
    marginBottom: 15,
    color: "#333",
    borderBottomWidth: 2,
    borderBottomColor: "#0066cc",
    paddingBottom: 5,
  },
  exampleContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#0066cc",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    color: "#666",
    marginRight: 5,
  },
});
