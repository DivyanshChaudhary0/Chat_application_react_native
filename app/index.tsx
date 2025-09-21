import { colors } from "@/constants/theme";
import { router } from "expo-router";
import { useEffect } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

export default function Index() {
  useEffect(() => {
    setTimeout(() => {
      router.replace("/(auth)/login");
    }, 1500);
  }, []);

  return (
      <View style={styles.container}>
        <StatusBar
          barStyle={"light-content"}
          backgroundColor={colors.neutral900}
        />
        <Animated.Image
          source={require("../assets/splashImage.png")}
          style={styles.logo}
          entering={FadeInDown.duration(700).springify()}
          resizeMode={"contain"}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.neutral900,
  },
  logo: {
    height: "23%",
    aspectRatio: 1,
  },
});
