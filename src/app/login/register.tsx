import Details from '@/src/components/Details';
import LoginBtnNav from '@/src/components/LoginBtnNav';
import Nav from '@/src/components/NavHelp';
import NumInputField from '@/src/components/NumInputField';
import { useInfo } from '@/src/context/InfoContext';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { formatPhoneNumberIntl } from 'react-phone-number-input';

export default function Register() {
  const { number } = useInfo();

  // formatPhoneNumberIntl('+12133734253') === '+1 213 373 4253';
  const phoneNum = formatPhoneNumberIntl(number);
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View>
          <Nav shouldGoBack={true} />
          <Details
            heading="Enter your OTP number"
            text={
              <Text>
                <Text>We&#39;ve sent the OTP number via sms to </Text>
                <View>
                  <Text
                    style={{
                      fontFamily: 'Poppins-Font-Semibold',
                      marginTop: 5,
                      fontSize: 16,
                      color: '#0D0D0D',
                    }}
                  >
                    {phoneNum}
                  </Text>
                </View>
              </Text>
            }
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              {Array.from({ length: 5 }).map((el, index) => (
                <NumInputField key={index} />
              ))}
            </View>
          </Details>
        </View>

        <View style={{ gap: 10 }}>
          <LoginBtnNav
            text="Continue"
            fn={() => router.navigate('/login/select_category')}
          />
          <Text
            style={{
              fontFamily: 'Poppins-Font',
              color: '#777',
              textAlign: 'center',
              fontSize: 12,
            }}
          >
            By clicking, I accept the{' '}
            <Text style={styles.bold}>Terms and Conditions</Text> &{' '}
            <Text style={styles.bold}>Privacy Policy</Text>
          </Text>
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
  bold: {
    fontFamily: 'Poppins-Font-Semibold',
    color: '#000',
  },
  phoneNum: {
    fontFamily: 'Poppins-Font-Semibold',
    fontSize: 16,
  },
});
