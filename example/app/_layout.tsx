import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="mathjax-test" options={{ title: 'MathJax Examples' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
