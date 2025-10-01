import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          position: "absolute",
          height: 58,
          marginHorizontal: 20,
          marginBottom: 40,
          borderRadius: 60,
          elevation: 0,
          shadowOpacity: 0,
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 0,
          paddingTop: 0,
          paddingVertical: 0,
          paddingHorizontal: 0,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          padding: 0,
          margin: 0,
        },
        tabBarLabelStyle: {
          margin: 0,
          padding: 0,
          textAlign: "center",
        },
        tabBarIconStyle: {
          margin: 0,
          padding: 0,
        },
        tabBarBackground: () => (
          <View style={styles.tabBarBackground}>
            <BlurView intensity={30} style={styles.blurView} />
          </View>
        ),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="paperplane.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBarBackground: {
    flex: 1,
    borderRadius: 60,
    overflow: "hidden",
    padding: 0,
    margin: 0,
  },
  blurView: {
    flex: 1,
    backgroundColor: "#222D313A",
    padding: 0,
    margin: 0,
  },
});
