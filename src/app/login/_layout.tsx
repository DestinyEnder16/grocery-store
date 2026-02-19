import { InfoProvider } from '@/src/context/InfoContext';
import { Stack } from 'expo-router';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <KeyboardProvider>
      <SafeAreaProvider>
        <InfoProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </InfoProvider>
      </SafeAreaProvider>
    </KeyboardProvider>
  );
}
