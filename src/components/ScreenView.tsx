import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface screenProp {
  children: React.ReactNode;
  headline: string;
}

export default function ScreenView({ children, headline }: screenProp) {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      justifyContent: 'space-between',
    },
    view: {
      alignSelf: 'center',
      flex: 1,
      justifyContent: 'center',
    },
    pagetxt: {
      fontFamily: 'Poppins-Font',
      fontSize: 24,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      {children}

      <View style={styles.view}>
        <Text style={styles.pagetxt}>{headline}</Text>
      </View>
    </SafeAreaView>
  );
}
