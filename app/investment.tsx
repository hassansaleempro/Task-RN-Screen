import { Fonts } from "@/constants/fonts";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function InvestmentScreen() {
  return (
    <LinearGradient
      colors={["#27475D", "#0A1828"]}
      locations={[0, 0.75]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.5, y: 0.4 }}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.safeArea}>
        {/* Progress Indicators */}
        <View style={styles.progressContainer}>
          <View
            style={[
              styles.progressLine,
              styles.progressLineActive,
              styles.progressLineFirst,
            ]}
          />
          <View style={[styles.progressLine, styles.progressLineActive]} />
          <View style={[styles.progressLine, styles.progressLineActive]} />
          <View
            style={[
              styles.progressLine,
              styles.progressLineCurrent,
              styles.progressLineLast,
            ]}
          />
        </View>

        {/* Onboarding Banner Image */}
        <View style={styles.bannerContainer}>
          <Image
            source={require("@/assets/images/onboarding_banner.png")}
            style={styles.bannerImage}
            contentFit="fill"
          />
        </View>

        {/* Center View */}
        {/* <LinearGradient
          colors={["transparent", "#102333", "transparent"]}
          locations={[0, 0.1, 0.9]}
          style={styles.centerView}
        /> */}

        {/* Call to Action Button */}
        <TouchableOpacity
          style={styles.ctaButton}
          onPress={() => {
            router.push("/(tabs)");
          }}
        >
          <Text style={styles.ctaText}>ابدأ مع توت</Text>
        </TouchableOpacity>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            بالمتابعة، أنت توافق على.{" "}
            <Text style={styles.linkText}>الشروط </Text>{" "}
            <Text style={styles.linkText}>و</Text>{" "}
            <Text style={styles.linkText}>سياسة الخصوصية.</Text>
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  progressContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 30,
    gap: 8,
  },
  progressLine: {
    height: 4,
    flex: 1,
  },
  progressLineActive: {
    backgroundColor: "white",
  },
  progressLineCurrent: {
    backgroundColor: "#D4EA6A",
  },
  progressLineFirst: {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  progressLineLast: {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  bannerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    zIndex: 2,
  },
  bannerImage: {
    width: "100%",
    height: "100%", // Maintain aspect ratio
    // backgroundColor: "red",
  },
  centerView: {
    width: "100%",
    height: 300,
    top: height * 0.55,
    alignSelf: "center",
    position: "absolute",
  },
  ctaButton: {
    backgroundColor: "#C4E429",
    marginHorizontal: 20,
    height: 56,
    justifyContent: "center",
    borderRadius: 24,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#A8FF33",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  ctaText: {
    color: "#OF2232",
    fontSize: 18,
    fontFamily: Fonts.suisse.regular,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  footerText: {
    color: "#98B5C9",
    fontSize: 16,
    textAlign: "center",
    fontFamily: Fonts.suisse.regular,
  },
  linkText: {
    textDecorationLine: "underline",
    fontFamily: Fonts.suisse.regular,
  },
});
