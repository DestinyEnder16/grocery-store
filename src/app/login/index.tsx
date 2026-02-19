import AppKeyboardScrollView from '@/src/components/AppKeyboardScrollView';
import Details from '@/src/components/Details';
import LoginBtnNav from '@/src/components/LoginBtnNav';
import Nav from '@/src/components/NavHelp';
import PhoneNumberInput from '@/src/components/PhoneNumInput';
import { useInfo } from '@/src/context/InfoContext';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Index() {
  const router = useRouter();
  const { number } = useInfo();
  return (
    <AppKeyboardScrollView>
      <View>
        <Nav />

        <Details
          heading="Get started"
          text="You can login or make an account if you're new"
          extra_txt="Enter your phone number"
        >
          <PhoneNumberInput />
        </Details>
      </View>

      <LoginBtnNav
        text="Continue"
        fn={() => {
          number && router.navigate('/login/register');
        }}
      />
    </AppKeyboardScrollView>
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
