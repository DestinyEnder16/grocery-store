import LoginBtnNav from '@/src/components/LoginBtnNav';
import LoginInfoField from '@/src/components/LoginInfoField';
import Nav from '@/src/components/NavHelp';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { containerStyles } from '@/src/constants/data';
import { LocationSvg } from '@/src/types';
import { useRouter } from 'expo-router';

export default function LocationScreen() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={containerStyles.container}>
        <Nav shouldGoBack={true} />

        <View
          style={{
            alignItems: 'center',
            // flex: 1,
            // justifyContent: 'flex-start',
            gap: 40,
          }}
        >
          <LoginInfoField Img={<LocationSvg />} />

          <View style={{ alignItems: 'center' }}>
            <Text style={styles.headline}>Set your location</Text>
            <Text style={styles.txt}>
              This let us know your location for best shipping experience
            </Text>
          </View>
        </View>

        <View style={{ gap: 16 }}>
          <LoginBtnNav
            backgroundColor="#0D0D0D"
            text="Allow Google Maps"
            color="white"
            fn={() => router.navigate('/login/notifications')}
          />
          <LoginBtnNav
            backgroundColor="#F8F9FA"
            text="Set Manually"
            color="black"
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#fff',
  },
  headline: {
    fontFamily: 'Poppins-Font-Semibold',
    fontSize: 20,
  },
  txt: {
    fontFamily: 'Poppins-Font',
    textAlign: 'center',
    lineHeight: 30,
    color: '#777777',
    fontSize: 16,
  },
});
