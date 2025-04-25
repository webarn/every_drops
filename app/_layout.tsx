import "../src/global.css";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { AppRegistry, useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";

import {
  darkThemeColors,
  lightThemeColors,
} from "../src/constants/ThemeColors";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <PaperProvider
      theme={colorScheme === "dark" ? darkThemeColors : lightThemeColors}
    >
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}

AppRegistry.registerComponent("every_drops", () => RootLayout);
