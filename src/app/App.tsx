// NOTE: this is where the Global providers can be configured.

import HomeIndex from '@/src/app/onboarding/index';
import { useFonts } from '@expo-google-fonts/inter';
import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useAssets } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-gesture-handler';
import HomeLayout from './home/layout';
import Layout from './login/layout';

// 1. Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen name="Home" component={HomeIndex} />
      <Stack.Screen name="LoginLayout" component={Layout} />
      <Stack.Screen name="HomeLayout" component={HomeLayout} />
    </Stack.Navigator>
  );
}

type RootStackType = typeof RootStack;

declare module '@react-navigation/core' {
  interface RootNavigator extends RootStackType {}
}

export default function RootLayout() {
  // IMPORTANT PROBLEM: Using of fonts is synchronous - we have to tell the app to wait until the fonts are loaded before displaying the main pages
  const [loaded, error] = useFonts({
    // NOTE: The fonts are loaded in the _layout.tsx file so that it can be accessible by all components easily
    'Poppins-Font': require('@/assets/fonts/Poppins.ttf'),
    'Poppins-Font-Bold': require('@/assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Font-Semibold': require('@/assets/fonts/Poppins-SemiBold.ttf'),
    ...Ionicons.font,
  });

  const [complete, err] = useAssets([
    require('@/assets/images/planet-pfp.jpg'),
  ]);

  // SOLUTION: Using a splash screen

  useEffect(() => {
    if (loaded || error || complete) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error, complete]);

  // 3. Render nothing (keep splash screen up) while loading
  if (!loaded && !error && !complete) {
    return null;
  }

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
