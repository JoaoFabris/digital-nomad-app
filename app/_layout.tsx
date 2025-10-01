import { InMemoryRepository } from "@/src/infra/repositories/adapters/inMemory";
import { RepositoryProvider } from "@/src/infra/repositories/RepositoryProvider";
import theme from "@/src/theme/theme";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
  useFonts,
} from '@expo-google-fonts/poppins';
import { ThemeProvider } from "@shopify/restyle";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';
import "react-native-reanimated";

if (__DEV__) {
  require("../ReactotronConfig");
}

// Previne que a splash screen seja escondida automaticamente
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    // Ícones (manter local)
    IcoMoon: require("../assets/icons/icomoon.ttf"),
    
    // Google Fonts Poppins (mapeamento para seus nomes atuais)
    PoppinsThin: Poppins_100Thin,
    PoppinsThinItalic: Poppins_100Thin_Italic,
    PoppinsExtraLight: Poppins_200ExtraLight,
    PoppinsExtraLightItalic: Poppins_200ExtraLight_Italic,
    PoppinsLight: Poppins_300Light,
    PoppinsLightItalic: Poppins_300Light_Italic,
    PoppinsRegular: Poppins_400Regular,
    PoppinsItalic: Poppins_400Regular_Italic,
    PoppinsMedium: Poppins_500Medium,
    PoppinsMediumItalic: Poppins_500Medium_Italic,
    PoppinsSemiBold: Poppins_600SemiBold,
    PoppinsSemiBoldItalic: Poppins_600SemiBold_Italic,
    PoppinsBold: Poppins_700Bold,
    PoppinsBoldItalic: Poppins_700Bold_Italic,
    PoppinsExtraBold: Poppins_800ExtraBold,
    PoppinsExtraBoldItalic: Poppins_800ExtraBold_Italic,
    PoppinsBlack: Poppins_900Black,
    PoppinsBlackItalic: Poppins_900Black_Italic,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <RepositoryProvider value={InMemoryRepository}>
      <ThemeProvider theme={theme}>
        <Stack
          screenOptions={{
            contentStyle: { backgroundColor: theme.colors.background },
          }}
        >
          <Stack.Screen name="(protected)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="sign-in" />
        </Stack>
        <StatusBar style="light" />
      </ThemeProvider>
    </RepositoryProvider>
  );
}