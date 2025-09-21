import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";

export default function Index() {

  useEffect(() => {
    setTimeout(() => {
      router.replace('/(auth)/login');
    }, 500)
  }, [])

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.neutral900
      }}
    >
      <Image source={require('../assets/splashImage.png')} style={{ height: 300, aspectRatio: 1 }} />
    </View>
  );
}
