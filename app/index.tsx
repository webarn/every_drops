import { Card } from "@components/Basic/Card";
import { Stack } from "expo-router";
import { useColorScheme } from "nativewind";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Button } from "react-native-paper";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Index() {
  // const { toggleColorScheme } = useColorScheme();
  const inter = useSafeAreaInsets();
  const top = inter.top + 30;

  const quickAccess = [
    {
      id: "1",
      title: "小马会记",
    },
    {
      id: "2",
      title: "极速分账",
    },
    {
      id: "3",
      title: "发项目",
    },
    {
      id: "4",
      title: "智能合约",
    },
    {
      id: "5",
      title: "项目评估",
    },
  ];

  const QuickItem = (item: any) => {
    return (
      <View
        key={item.id}
        className="flex-1 items-center gap-y-2 overflow-hidden rounded-md px-2"
      >
        <Image
          source={{
            uri: "https://picsum.photos/80/80?blur",
          }}
          className="aspect-square w-full rounded-lg"
          resizeMode="cover"
        ></Image>
        <Text className="text-xs text-gray-600">{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView
      edges={["bottom"]}
      className="flex-1 bg-base-50 px-4"
      style={{ paddingTop: top }}
    >
      <Image
        source={{
          uri: "https://picsum.photos/360/140",
        }}
        className="h-[140px] w-full rounded-lg"
        resizeMode="cover"
      />

      <View className="mt-8 w-full flex-row items-center justify-between gap-x-3">
        {quickAccess.map((item) => {
          return <QuickItem key={item.id} {...item} />;
        })}
      </View>

      <View className="mt-8 flex-row gap-x-4 bg-gray-50">
        <Image
          source={{
            uri: "https://picsum.photos/220/120",
          }}
          className="h-[120px] flex-1 rounded-lg"
          resizeMode="cover"
        ></Image>
        <Image
          source={{
            uri: "https://picsum.photos/220/120",
          }}
          className="h-[120px] flex-1 rounded-lg"
          resizeMode="cover"
        ></Image>
      </View>

      <Card className="relative mt-3">
        <>
          <Text className="absolute right-0 top-0 rounded-bl-md bg-[#F7E1CA] px-3 py-1 text-xs text-[#924E13]">
            募资中
          </Text>

          <Text className="pr-10 text-lg font-bold" numberOfLines={1}>
            茶百道北京门店融资项目10万项融资项目10万项
          </Text>
          <View className="mt-3 flex-row items-center gap-x-2">
            <Text className="rounded-md bg-[#EBEFF8] px-2 py-1 text-sm">
              手动报账
            </Text>
            <Text className="text-sm text-base-700">北京</Text>
            <Text className="text-sm text-base-700">休闲茶饮</Text>
          </View>

          <View className="border-b-hairline mt-5 w-full flex-row border-base-200 pb-4">
            <View className="w-1/3">
              <Text className="text-xl font-bold text-base-950">6万</Text>
              <Text className="text-lg text-gray-400">门店月营收</Text>
            </View>
            <View className="w-1/3">
              <Text className="text-xl font-bold text-base-950">2年</Text>
              <Text className="text-lg text-gray-400">联营年限</Text>
            </View>
          </View>

          <View className="mt-4 w-full flex-row items-center justify-between">
            <Text className="text-base-900">
              联营进度 <Text className="text-red-500">90%</Text>
            </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              className="rounded-full border border-primary-600 px-3 py-2"
            >
              <Text className="text-primary-600">还差2万</Text>
            </TouchableOpacity>
          </View>
        </>
      </Card>

      {/* <Card>
        <>
          <Text className="text-2xl text-base-900" style={{}}>
            Card-0
          </Text>
          <Text className="text-2xl text-base-900">Card-1</Text>
        </>
      </Card>

      <Button icon="camera" mode="contained" onPress={toggleColorScheme}>
        Press me
      </Button> */}
    </SafeAreaView>
  );
}
