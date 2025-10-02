import { BlurView } from "expo-blur";
import { Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [activeTab, setActiveTab] = useState("index");

  // Ensure home tab is active by default when component mounts
  useEffect(() => {
    setActiveTab("/index");
  }, []);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#94979C",
        tabBarInactiveTintColor: "#FFFFFF",
        headerShown: false,
        tabBarButton: (props) => {
          const routeName = props.to || props.href || props.children?.props?.to;
          const isFocused = activeTab === routeName?.replace("/(tabs)/", "");

          return (
            <View
              style={[styles.tabButton, isFocused && styles.activeTabButton]}
            >
              <HapticTab
                {...props}
                onPress={(ev) => {
                  setActiveTab(routeName?.replace("/(tabs)/", "") || "/index");
                  props.onPress?.(ev);
                }}
              />
            </View>
          );
        },
        tabBarStyle: {
          position: "absolute",
          height: 67,
          marginHorizontal: 20,
          marginBottom: 40,
          borderRadius: 60,
          borderTopWidth: 0,
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
          title: "المحفظة",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={20}
              name="house.fill"
              color={focused ? "#94979C" : "#FFFFFF"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "استثماراتي",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={20}
              name="person.fill"
              color={focused ? "#94979C" : "#FFFFFF"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "توت",
          tabBarIcon: ({ color, focused }) => (
            <IconSymbol
              size={20}
              name="paperplane.fill"
              color={focused ? "#94979C" : "#FFFFFF"}
            />
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
    // backgroundColor: "#222D313A",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 0,
    margin: 0,
  },
  tabButton: {
    flex: 1,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
  },
  activeTabButton: {
    backgroundColor: "rgba(82, 82, 82, 0.325)",
    marginVertical: 5,
  },
});
