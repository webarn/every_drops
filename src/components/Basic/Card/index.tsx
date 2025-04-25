import { useColorScheme } from "nativewind";
import React from "react";
import { Platform, StyleSheet, View, ViewStyle } from "react-native";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: ViewStyle;
}

export const Card: React.FC<CardProps> = ({ children, className, style }) => {
  const { colorScheme } = useColorScheme();

  return (
    <View
      className={`overflow-hidden rounded-lg bg-background p-3 ${className || ""}`}
      style={[
        {
          borderWidth: StyleSheet.hairlineWidth,
          shadowColor: "red",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          borderColor: colorScheme === "dark" ? "#e4e4e7" : "#f5f5f5",
          ...Platform.select({
            ios: {
              shadowColor: "#27272a",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 8,
            },
            android: {
              elevation: 3,
            },
          }),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};

export default Card;
