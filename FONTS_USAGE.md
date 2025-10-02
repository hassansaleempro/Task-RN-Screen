# Custom Fonts Usage Guide

This app now uses Suisse International fonts. Here's how to use them throughout your app.

## Available Fonts

### Font Variants

- **Light**: `SuisseIntl-Light` - For subtle text
- **Regular**: `Suisse_Intl_Regular` - Standard body text
- **Book**: `Suisse_Intl_Book` - Alternative regular weight
- **Medium**: `Suisse_Intl_Medium` - Subheadings and emphasis
- **Bold**: `Suisse_Intl_Bold` - Headings and strong emphasis
- **Mono**: `Suisse_Intl_Mono` - Code and monospace text

## Usage Methods

### Method 1: Direct Font Family Usage (Recommended)

```tsx
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontFamily: "Suisse_Intl_Bold",
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  body: {
    fontSize: 16,
    fontFamily: "Suisse_Intl_Regular",
    fontWeight: "400",
    color: "#CCCCCC",
  },
  subheading: {
    fontSize: 18,
    fontFamily: "Suisse_Intl_Medium",
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
```

### Method 2: Using Custom Text Components

```tsx
import { HeadingText, BodyText, LightText } from '@/components/custom-text';

// In your component
<HeadingText style={{ fontSize: 28, color: '#FFFFFF' }}>
  Main Title
</HeadingText>

<BodyText style={{ fontSize: 16, color: '#CCCCCC' }}>
  Regular body text
</BodyText>

<LightText style={{ fontSize: 14, color: '#999999' }}>
  Light subtitle text
</LightText>
```

### Method 3: Using Font Constants (Optional)

```tsx
import { Fonts } from "@/constants/fonts";

const styles = StyleSheet.create({
  customText: {
    fontSize: 18,
    fontFamily: Fonts.subheading, // "Suisse_Intl_Medium"
    fontWeight: "600",
    color: "#FFFFFF",
  },
});
```

## Font Constants Reference

```tsx
// From constants/fonts.ts
export const Fonts = {
  heading: "Suisse_Intl_Bold", // For main titles
  subheading: "Suisse_Intl_Medium", // For section headers
  body: "Suisse_Intl_Regular", // For regular text
  bodyBook: "Suisse_Intl_Book", // Alternative regular
  light: "SuisseIntl-Light", // For subtle text
  mono: "Suisse_Intl_Mono", // For code/monospace
};
```

## Examples in Your App

### Investment Screen

```tsx
// Button text
ctaText: {
  color: "#OF2232",
  fontSize: 18,
  fontFamily: "Suisse_Intl_Bold",
  fontWeight: "bold",
}
```

### Profile Screen

```tsx
// Main title
title: {
  fontSize: 28,
  fontFamily: "Suisse_Intl_Bold",
  fontWeight: "bold",
  textAlign: "center",
  color: "white",
},

// Section titles
summaryTitle: {
  fontSize: 18,
  fontFamily: "Suisse_Intl_Medium",
  fontWeight: "600",
  marginBottom: 10,
  alignSelf: "center",
  color: "#F7F7F7",
}
```

## Best Practices

1. **Consistency**: Use the same font family for similar text elements
2. **Hierarchy**: Use heading for titles, subheading for sections, body for content
3. **Readability**: Ensure sufficient contrast between text and background
4. **Performance**: Fonts are loaded once at app startup, so they're efficient to use

## Troubleshooting

If fonts don't appear:

1. Make sure the app has been restarted after adding fonts
2. Check that font names match exactly (case-sensitive)
3. Verify the font files are in the correct directory
4. Clear the app cache and rebuild if needed

## Font Loading

Fonts are automatically loaded in `app/_layout.tsx` using `useFonts` from `expo-font`. The app will show a splash screen until fonts are loaded.
