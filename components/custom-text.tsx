import { Fonts } from "@/constants/fonts";
import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  variant?: "heading" | "subheading" | "body" | "bodyBook" | "light" | "mono";
  children: React.ReactNode;
}

export function CustomText({
  variant = "body",
  style,
  children,
  ...props
}: CustomTextProps) {
  const fontFamily = Fonts[variant];

  return (
    <Text style={[styles.base, { fontFamily }, style]} {...props}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    color: "#FFFFFF", // Default white color
  },
});

// Pre-configured text components for common use cases
export function HeadingText(props: Omit<CustomTextProps, "variant">) {
  return <CustomText variant="heading" {...props} />;
}

export function SubheadingText(props: Omit<CustomTextProps, "variant">) {
  return <CustomText variant="subheading" {...props} />;
}

export function BodyText(props: Omit<CustomTextProps, "variant">) {
  return <CustomText variant="body" {...props} />;
}

export function LightText(props: Omit<CustomTextProps, "variant">) {
  return <CustomText variant="light" {...props} />;
}

export function MonoText(props: Omit<CustomTextProps, "variant">) {
  return <CustomText variant="mono" {...props} />;
}
