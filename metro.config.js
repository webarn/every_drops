const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

config.resolver = config.resolver || {};
config.resolver.alias = {
  "@components": require("path").resolve(__dirname, "src/components"),
  "@constants": require("path").resolve(__dirname, "src/constants"),
  "@context": require("path").resolve(__dirname, "src/context"),
  "@hooks": require("path").resolve(__dirname, "src/hooks"),
  "@screen": require("path").resolve(__dirname, "src/screen"),
};

module.exports = withNativeWind(config, { input: "./src/global.css" });
