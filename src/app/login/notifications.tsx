import LoginBtnNav from '@/src/components/LoginBtnNav';
import LoginInfoField from '@/src/components/LoginInfoField';
import Nav from '@/src/components/NavHelp';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { containerStyles } from '@/src/constants/data';
import { NotifSvg } from '@/src/types';
import { useNavigation } from '@react-navigation/native';

export default function NotificationScreen() {
  const navigation = useNavigation<any>();
  return (
    <SafeAreaView style={containerStyles.container}>
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
        <LoginInfoField Img={<NotifSvg />} />
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
          fn={() => navigation.navigate('Location')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
