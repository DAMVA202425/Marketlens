// Import your global CSS file
import "./global.css";
import { Slot, SplashScreen, Stack } from "expo-router";

import { useFonts } from "expo-font";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "WorkSans-Black": require("../assets/fonts/WorkSans-Black.ttf"),
    "WorkSans-Light": require("../assets/fonts/WorkSans-Light.ttf"),
    "WorkSans-Medium": require("../assets/fonts/WorkSans-Medium.ttf"),
    "Kanit-Black": require("../assets/fonts/Kanit-Black.ttf"),
    "Kanit-Medium": require("../assets/fonts/Kanit-Medium.ttf"),
    "Kanit-Light": require("../assets/fonts/Kanit-Light.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  return (
    <GestureHandlerRootView>
      <Slot />
    </GestureHandlerRootView>
  );
};
export default RootLayout;
