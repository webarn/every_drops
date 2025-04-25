import {
  MD3DarkTheme as DarkTheme,
  MD3LightTheme as LightTheme,
} from "react-native-paper";

const roundness = 1.5;

const lightThemeColors = {
  ...LightTheme,
  roundness,
  colors: {
    ...LightTheme.colors,
    primary: "#1676FF",
    // surfaceVariant: "white",
  },
};

const darkThemeColors = {
  ...DarkTheme,
  roundness,
  colors: {
    ...DarkTheme.colors,
    primary: "#50b4ff",
    // surfaceVariant: "black",
  },
};

export { darkThemeColors, lightThemeColors };
