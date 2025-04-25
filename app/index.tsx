import { Card } from "@components/Basic/Card";
import { useColorScheme } from "nativewind";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  const { toggleColorScheme } = useColorScheme();

  return (
    <View className="flex-1 justify-center gap-8 bg-background px-4">
      {/* <View className="dark:bg-base-900 m-4 h-[200px] items-center justify-normal rounded-lg bg-white shadow">
        <Text className="text-primary-600 mx-4 p-3 text-2xl">
          Edit app/index.tsx to edit this screen.
        </Text>
      </View> */}

      <Card>
        <>
          <Text className="text-2xl text-base-900">Card-0</Text>
          <Text className="text-2xl text-base-900">Card-1</Text>
        </>
      </Card>

      <Button icon="camera" mode="contained" onPress={toggleColorScheme}>
        Press me
      </Button>
    </View>
  );
}
