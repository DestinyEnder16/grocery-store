import { InfoProvider } from '@/src/context/InfoContext';
import { Stack } from 'expo-router';
import { KeyboardProvider } from 'react-native-keyboard-controller';

export default function Layout() {
  return (
    <KeyboardProvider>
      <InfoProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </InfoProvider>
    </KeyboardProvider>
  );
}
