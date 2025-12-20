import { StyleSheet, View, Text, ScrollView } from "react-native";
import { MathJaxSvg } from "react-native-mathjax-html-to-svg";

export default function MathJaxTestScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>MathJax Test</Text>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Simple inline (dollar):</Text>
        <MathJaxSvg fontSize={20} color="black">
          {"$$E = mc^{2}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Display math (brackets):</Text>
        <MathJaxSvg fontSize={20} color="black">
          {"$$a^2 + b^2 = c^2$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Pythagorean theorem:</Text>
        <MathJaxSvg fontSize={20} color="black">
          {"$$a^2 + b^2 = c^2$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Quadratic formula:</Text>
        <MathJaxSvg fontSize={18} color="#333">
          {"\\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\]"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Euler's identity:</Text>
        <MathJaxSvg fontSize={22} color="#0066cc">
          {"\\[e^{i\\pi} + 1 = 0\\]"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Integral:</Text>
        <MathJaxSvg fontSize={20} color="#006600">
          {"\\[\\int_0^\\infty e^{-x^2} dx = \\frac{\\sqrt{\\pi}}{2}\\]"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Chemistry - Water molecule:</Text>
        <MathJaxSvg fontSize={20} color="black">
          {"$$\\ce{H2O}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Chemistry - Chemical reaction:</Text>
        <MathJaxSvg fontSize={18} color="#cc0066">
          {"$$\\ce{2H2 + O2 -> 2H2O}$$"}
        </MathJaxSvg>
      </View>

      <View style={styles.exampleContainer}>
        <Text style={styles.label}>Chemistry - Complex equation:</Text>
        <MathJaxSvg fontSize={16} color="#660099">
          {"$$\\ce{SO4^2- + Ba^2+ -> BaSO4 v}$$"}
        </MathJaxSvg>
      </View>
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 40,
  },
  exampleContainer: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
  },
});
