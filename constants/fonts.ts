export const Fonts = {
  // Suisse International font family
  suisse: {
    light: 'SuisseIntl-Light',
    regular: 'Suisse_Intl_Regular',
    book: 'Suisse_Intl_Book',
    medium: 'Suisse_Intl_Medium',
    bold: 'Suisse_Intl_Bold',
    mono: 'Suisse_Intl_Mono',
  },
  
  // Font weights for easy reference
  weights: {
    light: '300',
    regular: '400',
    book: '400',
    medium: '500',
    bold: '700',
  },
  
  // Common font combinations
  heading: 'Suisse_Intl_Bold',
  subheading: 'Suisse_Intl_Medium',
  body: 'Suisse_Intl_Regular',
  bodyBook: 'Suisse_Intl_Book',
  light: 'SuisseIntl-Light',
  mono: 'Suisse_Intl_Mono',
} as const;

// Font loading function (for Expo)
export const loadFonts = async () => {
  const { useFonts } = await import('expo-font');
  
  return useFonts({
    'SuisseIntl-Light': require('../assets/fonts/fonnts.com-SuisseIntl-Light.ttf'),
    'Suisse_Intl_Regular': require('../assets/fonts/fonnts.com-Suisse_Intl_Regular.ttf'),
    'Suisse_Intl_Book': require('../assets/fonts/fonnts.com-Suisse_Intl_Book.ttf'),
    'Suisse_Intl_Medium': require('../assets/fonts/fonnts.com-Suisse_Intl_Medium.ttf'),
    'Suisse_Intl_Bold': require('../assets/fonts/fonnts.com-Suisse_Intl_Bold.ttf'),
    'Suisse_Intl_Mono': require('../assets/fonts/fonnts.com-Suisse_Intl_Mono.ttf'),
  });
};
