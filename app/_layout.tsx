import { Stack } from "expo-router";
import "./globals.css";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)/index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="calculators/age-calculator" options={{ headerShown: true, title: "Age Calculator" }} />
      <Stack.Screen name="calculators/bmi-calculator" options={{ headerShown: true, title: "BMI Calculator" }} />
      <Stack.Screen name="converters/temperature-converter" options={{ headerShown: true, title: "Temperature Converter" }} />
      <Stack.Screen name="converters/length-converter" options={{ headerShown: true, title: "Length Converter" }} />
      <Stack.Screen name="counters/letter-counter" options={{ headerShown: true, title: "Letter Counter" }} />
      <Stack.Screen name="counters/word-counter" options={{ headerShown: true, title: "Word Counter" }} />
      <Stack.Screen name="counters/sentence-counter" options={{ headerShown: true, title: "Sentence Counter" }} />
    </Stack>
  )
}
