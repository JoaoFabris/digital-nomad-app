// app/_layout.tsx
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import theme from '@/src/theme/theme';
import { ThemeProvider } from '@shopify/restyle';

export default function RootLayout() {
  const [loaded] = useFonts({
    // Corrigir os caminhos - agora apontando para assets/images/fonts/
    IcoMoon: require('../assets/icons/icomoon.ttf'),
    PoppinsBlack: require('../assets/images/fonts/Poppins-Black.ttf'),
    PoppinsBlackItalic: require('../assets/images/fonts/Poppins-BlackItalic.ttf'),
    PoppinsBold: require('../assets/images/fonts/Poppins-Bold.ttf'),
    PoppinsBoldItalic: require('../assets/images/fonts/Poppins-BoldItalic.ttf'),
    PoppinsExtraBold: require('../assets/images/fonts/Poppins-ExtraBold.ttf'),
    PoppinsExtraBoldItalic: require('../assets/images/fonts/Poppins-ExtraBoldItalic.ttf'),
    PoppinsExtraLight: require('../assets/images/fonts/Poppins-ExtraLight.ttf'),
    PoppinsExtraLightItalic: require('../assets/images/fonts/Poppins-ExtraLightItalic.ttf'),
    PoppinsItalic: require('../assets/images/fonts/Poppins-Italic.ttf'),
    PoppinsLight: require('../assets/images/fonts/Poppins-Light.ttf'),
    PoppinsLightItalic: require('../assets/images/fonts/Poppins-LightItalic.ttf'),
    PoppinsMedium: require('../assets/images/fonts/Poppins-Medium.ttf'),
    PoppinsMediumItalic: require('../assets/images/fonts/Poppins-MediumItalic.ttf'),
    PoppinsRegular: require('../assets/images/fonts/Poppins-Regular.ttf'),
    PoppinsSemiBold: require('../assets/images/fonts/Poppins-SemiBold.ttf'),
    PoppinsSemiBoldItalic: require('../assets/images/fonts/Poppins-SemiBoldItalic.ttf'),
    PoppinsThin: require('../assets/images/fonts/Poppins-Thin.ttf'),
    PoppinsThinItalic: require('../assets/images/fonts/Poppins-ThinItalic.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack>
        <Stack.Screen name="(protected)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="sign-in" />
      </Stack>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
