import { Stack } from 'expo-router'
import * as SplashScreen from "expo-splash-screen"
import { useFonts } from 'expo-font'
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync()


export default function _layout() {
  
  const [fontsLoaded, fontError] = useFonts({
    'OS_BOLD': require("./assets/fonts/OpenSans-Bold.ttf"),
    'OS_MEDIUM': require("./assets/fonts/OpenSans-Medium.ttf"),
    'OS_REGULAR': require("./assets/fonts/OpenSans-Regular.ttf"),
    'OS_LIGHT': require("./assets/fonts/OpenSans-Light.ttf"),
  });
  
   const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Stack />
  )
}