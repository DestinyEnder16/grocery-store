import LoginBtnNav from '@/src/components/LoginBtnNav';
import LoginInfoField from '@/src/components/LoginInfoField';
import Nav from '@/src/components/NavHelp';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import Notif from '../../../assets/icons/notif_illustration.svg';

export default function NavigationScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Nav shouldGoBack={true} />

          <View
            style={{
              // flex: 1,
              alignItems: 'flex-start',
              alignSelf: 'flex-start',
              gap: 8,
            }}
          >
            <Text style={styles.headline}>
              Lastly, please enable notifications
            </Text>
            <Text style={styles.txt}>
              Enable your notifications for more updates and important messages
              about your grocery needs
            </Text>
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            // flex: 1,
            // justifyContent: 'flex-start',
            gap: 40,
          }}
        >
          <LoginInfoField Img={<Notif />} />
        </View>

        <View style={{ gap: 16 }}>
          <LoginBtnNav
            backgroundColor="#0D0D0D"
            text="Enable Notifications"
            color="white"
          />
          <LoginBtnNav
            backgroundColor="#F8F9FA"
            text="Skip For Now"
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
    paddingVertical: 16,
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
