import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';
import { SafeAreaView } from 'react-native-safe-area-context';
import { containerStyles } from '../constants/data';

interface appProps {
  children: React.ReactNode;
}

export default function AppKeyboardScrollView({ children }: appProps) {
  return (
    <KeyboardAwareScrollView
      bottomOffset={30}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <SafeAreaView style={containerStyles.container}>{children}</SafeAreaView>
    </KeyboardAwareScrollView>
  );
}
