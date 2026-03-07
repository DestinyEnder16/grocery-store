// NOTE: this is where the Global providers can be configured.

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

import Onboarding from '@/src/app/onboarding/index';
import * as Linking from 'expo-linking';
import { Text } from 'react-native';
import { UserProvider } from '../context/UserContext';

// 1. Prevent the splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const linking = {
  prefixes: ['grocerystore://', Linking.createURL('/')],
  config: {
    screens: {
      HomeLayout: {
        screens: {
          MainTabs: {
            screens: {
              Home: 'home',
              Profile: {
                path: 'user/:id?',

                // NOTE: The path is the primary pattern that will be used to generate the URL. The patterns in alias will be ignored when generating URLs.
                alias: ['profile/:id'],
              },
              Cart: 'cart',
              Favorite: 'favorite',
            },
          },
        },
      },
      Onboarding: 'login',
    },
  },
};

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Onboarding"
      screenOptions={{
        headerShown: false,
        statusBarStyle: 'dark',
      }}
    >
      <Stack.Screen name="Onboarding" component={Onboarding} />
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
    // NOTE: The fonts are loaded in the root file so that it can be accessible by all components easily
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
    <UserProvider>
      <NavigationContainer
        linking={linking as any}
        fallback={<Text>Invalid URL</Text>}
      >
        <RootStack />
      </NavigationContainer>
    </UserProvider>
  );
}
