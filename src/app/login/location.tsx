import LoginBtnNav from '@/src/components/LoginBtnNav';
import LoginInfoField from '@/src/components/LoginInfoField';
import Nav from '@/src/components/NavHelp';
import { StyleSheet, Text, View } from 'react-native';

import AppKeyboardScrollView from '@/src/components/AppKeyboardScrollView';
import { LocationSvg } from '@/src/types';
import { useNavigation } from '@react-navigation/native';

export default function LocationScreen() {
  const navigation = useNavigation<any>();
  return (
    <AppKeyboardScrollView>
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
          fn={() => navigation.navigate('Notification')}
        />
        <LoginBtnNav
          backgroundColor="#F8F9FA"
          text="Set Manually"
          color="black"
        />
      </View>
    </AppKeyboardScrollView>
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
