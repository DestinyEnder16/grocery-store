import { Stack } from 'expo-router';
// NOTE: this is where the Global providers can be configured.

import { useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
// 1. Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // IMPORTANT PROBLEM: Using of fonts is synchronous - we have to tell the app to wait until the fonts are loaded before displaying the main pages
  const [loaded, error] = useFonts({
    // NOTE: The fonts are loaded in the _layout.tsx file so that it can be accessible by all components easily
    'Poppins-Font': require('../../assets/fonts/Poppins.ttf'),
    'Poppins-Font-Bold': require('../../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Font-Semibold': require('../../assets/fonts/Poppins-SemiBold.ttf'),
  });

  // SOLUTION: Using a splash screen

  useEffect(() => {
    if (loaded || error) {
      // NOTE: You can add a 2-second delay so you can actually see your work!
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  // 3. Render nothing (keep splash screen up) while loading
  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,

        statusBarStyle: 'dark',
        // navigationBarHidden: true,
      }}
    />
  );
}
