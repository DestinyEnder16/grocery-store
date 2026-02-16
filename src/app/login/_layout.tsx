import { InfoProvider } from '@/src/context/InfoContext';
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <InfoProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </InfoProvider>
  );
}
