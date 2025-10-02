import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#27475D", "#0A1828"]}
      locations={[0, 0.75]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 0.4 }}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
