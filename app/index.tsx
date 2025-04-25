import { useColorScheme } from "nativewind";
import { Text, View } from "react-native";
import { Button, useTheme } from "react-native-paper";

export default function Index() {
  const { toggleColorScheme } = useColorScheme();
  const { colors } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.background,
      }}
    >
      <View
        className="h-30 m-4 items-center justify-normal rounded-lg"
        style={{
          shadowColor: colors.elevation.level5,
        }}
      >
        <Text className="text-primary-600 mx-4 p-3 text-2xl">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>

      <Button icon="camera" mode="contained" onPress={toggleColorScheme}>
        Press me
      </Button>
    </View>
  );
}
