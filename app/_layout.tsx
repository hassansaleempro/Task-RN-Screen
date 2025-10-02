import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export const unstable_settings = {
  anchor: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  // Load custom fonts
  const [fontsLoaded] = useFonts({
    "SuisseIntl-Light": require("../assets/fonts/fonnts.com-SuisseIntl-Light.ttf"),
    Suisse_Intl_Regular: require("../assets/fonts/fonnts.com-Suisse_Intl_Regular.ttf"),
    Suisse_Intl_Book: require("../assets/fonts/fonnts.com-Suisse_Intl_Book.ttf"),
    Suisse_Intl_Medium: require("../assets/fonts/fonnts.com-Suisse_Intl_Medium.ttf"),
    Suisse_Intl_Bold: require("../assets/fonts/fonnts.com-Suisse_Intl_Bold.ttf"),
    Suisse_Intl_Mono: require("../assets/fonts/fonnts.com-Suisse_Intl_Mono.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="investment" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
