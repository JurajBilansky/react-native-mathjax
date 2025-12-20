import { StyleSheet, View, Text, ScrollView } from "react-native";
import { MathJaxSvg } from "react-native-mathjax-html-to-svg";

export default function MathJaxTestScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MathJax Comprehensive Test</Text>

      {/* Basic Math */}
      <Text style={styles.sectionTitle}>Basic Math</Text>
      
      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Simple equation:</Text>
        <MathJaxSvg fontSize={20} color="black">
          {"$$E = mc^{2}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Pythagorean theorem:</Text>
        <MathJaxSvg fontSize={20} color="black">
          {"$$a^2 + b^2 = c^2$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Inline math: The formula </Text>
        <MathJaxSvg fontSize={16} color="#333">
          {"$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$"}
        </MathJaxSvg>
        <Text style={styles.label}> solves quadratic equations.</Text>
      </View>

      {/* AMS Package */}
      <Text style={styles.sectionTitle}>AMS (Advanced Math)</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Matrix:</Text>
        <MathJaxSvg fontSize={18} color="#0066cc">
          {"$$\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Align environment:</Text>
        <MathJaxSvg fontSize={16} color="#0066cc">
          {"$$\\begin{aligned} x &= 5 \\\\ y &= 10 \\end{aligned}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Cases:</Text>
        <MathJaxSvg fontSize={18} color="#0066cc">
          {"$$|x| = \\begin{cases} x & \\text{if } x \\geq 0 \\\\ -x & \\text{if } x < 0 \\end{cases}$$"}
        </MathJaxSvg>
      </View>

      {/* Integrals and Calculus */}
      <Text style={styles.sectionTitle}>Calculus</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Integral:</Text>
        <MathJaxSvg fontSize={20} color="#006600">
          {"$$\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Double integral with </Text>
        <MathJaxSvg fontSize={14} color="#006600">
          {"$\\iint$"}
        </MathJaxSvg>
        <Text style={styles.label}> notation:</Text>
        <MathJaxSvg fontSize={18} color="#006600">
          {"$$\\iint_D f(x,y)\\,dx\\,dy$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Limit:</Text>
        <MathJaxSvg fontSize={18} color="#006600">
          {"$$\\lim_{x \\to \\infty} \\frac{1}{x} = 0$$"}
        </MathJaxSvg>
      </View>

      {/* Chemistry - mhchem */}
      <Text style={styles.sectionTitle}>Chemistry (mhchem)</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Water molecule:</Text>
        <MathJaxSvg fontSize={20} color="black">
          {"$$\\ce{H2O}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Chemical reaction:</Text>
        <MathJaxSvg fontSize={18} color="#cc0066">
          {"$$\\ce{2H2 + O2 -> 2H2O}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Precipitation:</Text>
        <MathJaxSvg fontSize={16} color="#cc0066">
          {"$$\\ce{SO4^2- + Ba^2+ -> BaSO4 v}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Equilibrium with inline text: The reaction </Text>
        <MathJaxSvg fontSize={14} color="#cc0066">
          {"$\\ce{H2O <=> H+ + OH-}$"}
        </MathJaxSvg>
        <Text style={styles.label}> is reversible.</Text>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Complex arrows:</Text>
        <MathJaxSvg fontSize={16} color="#cc0066">
          {"$$\\ce{A <-> B <=> C}$$"}
        </MathJaxSvg>
      </View>

      {/* Physics */}
      <Text style={styles.sectionTitle}>Physics Package</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Bra-ket notation:</Text>
        <MathJaxSvg fontSize={18} color="#9900cc">
          {"$$\\bra{\\psi}\\ket{\\phi}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Derivative:</Text>
        <MathJaxSvg fontSize={18} color="#9900cc">
          {"$$\\dv{x}{t} = v$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Partial derivative:</Text>
        <MathJaxSvg fontSize={18} color="#9900cc">
          {"$$\\pdv{f}{x}$$"}
        </MathJaxSvg>
      </View>

      {/* Symbols and Special */}
      <Text style={styles.sectionTitle}>Special Symbols</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Greek letters:</Text>
        <MathJaxSvg fontSize={18} color="#ff6600">
          {"$$\\alpha, \\beta, \\gamma, \\Delta, \\Omega$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Set theory:</Text>
        <MathJaxSvg fontSize={18} color="#ff6600">
          {"$$\\mathbb{R}, \\mathbb{N}, \\mathbb{Z}, \\mathbb{Q}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Relations:</Text>
        <MathJaxSvg fontSize={18} color="#ff6600">
          {"$$\\leq, \\geq, \\neq, \\approx, \\equiv$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Arrows:</Text>
        <MathJaxSvg fontSize={18} color="#ff6600">
          {"$$\\rightarrow, \\Rightarrow, \\leftrightarrow, \\Leftrightarrow$$"}
        </MathJaxSvg>
      </View>

      {/* Cancel Package */}
      <Text style={styles.sectionTitle}>Cancel Package</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Cancellation:</Text>
        <MathJaxSvg fontSize={20} color="#cc0000">
          {"$$\\frac{\\cancel{5}x}{\\cancel{5}} = x$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Cross out:</Text>
        <MathJaxSvg fontSize={20} color="#cc0000">
          {"$$\\bcancel{incorrect}$$"}
        </MathJaxSvg>
      </View>

      {/* Color Package */}
      <Text style={styles.sectionTitle}>Color Package</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Colored text:</Text>
        <MathJaxSvg fontSize={20} color="black">
          {"$$\\color{red}{x} + \\color{blue}{y} = \\color{green}{z}$$"}
        </MathJaxSvg>
      </View>

      {/* BoldSymbol */}
      <Text style={styles.sectionTitle}>Bold Symbols</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Bold vectors:</Text>
        <MathJaxSvg fontSize={20} color="black">
          {"$$\\boldsymbol{v} = \\boldsymbol{\\nabla} \\times \\boldsymbol{A}$$"}
        </MathJaxSvg>
      </View>

      {/* Unicode */}
      <Text style={styles.sectionTitle}>Unicode Package</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Unicode characters:</Text>
        <MathJaxSvg fontSize={18} color="black">
          {"$$♠ ♣ ♥ ♦$$"}
        </MathJaxSvg>
      </View>

      {/* Mixed inline/display */}
      <Text style={styles.sectionTitle}>Mixed Text and Math</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Einstein showed that </Text>
        <MathJaxSvg fontSize={16} color="#0066cc">
          {"$E = mc^2$"}
        </MathJaxSvg>
        <Text style={styles.label}>, where </Text>
        <MathJaxSvg fontSize={16} color="#0066cc">
          {"$E$"}
        </MathJaxSvg>
        <Text style={styles.label}> is energy, </Text>
        <MathJaxSvg fontSize={16} color="#0066cc">
          {"$m$"}
        </MathJaxSvg>
        <Text style={styles.label}> is mass, and </Text>
        <MathJaxSvg fontSize={16} color="#0066cc">
          {"$c$"}
        </MathJaxSvg>
        <Text style={styles.label}> is the speed of light.</Text>
      </View>

      <View style={{height: 50}} />
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
