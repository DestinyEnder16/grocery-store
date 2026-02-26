import { InfoProvider } from '@/src/context/InfoContext';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import LoginIndex from '.';
import LocationScreen from './location';
import NotificationScreen from './notifications';
import RegisterScreen from './register';
import Select_Category from './select_category';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={LoginIndex} />
      <Stack.Screen name="Location" component={LocationScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Category" component={Select_Category} />
    </Stack.Navigator>
  );
}

type RootStackType = typeof RootStack;

declare module '@react-navigation/core' {
  interface RootNavigator extends RootStackType {}
}

export default function Layout() {
  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <InfoProvider>
          {/* <Stack screenOptions={{ headerShown: false }} /> */}
          <RootStack />
        </InfoProvider>
      </SafeAreaProvider>
    </KeyboardProvider>
  );
}
