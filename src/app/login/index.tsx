import Details from '@/src/components/Details';
import LoginBtnNav from '@/src/components/LoginBtnNav';
import PhoneNumberInput from '@/src/components/PhoneNumInput';
import { useRouter } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Details
          heading="Get started"
          text="You can login or make an account if you're new"
          extra_txt="Enter your phone number"
        >
          <PhoneNumberInput />
        </Details>

        <LoginBtnNav
          text="Continue"
          fn={() => router.navigate('/login/register')}
        />
        {/* <RedirectBtn /> */}
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
});
