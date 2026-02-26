import AppKeyboardScrollView from '@/src/components/AppKeyboardScrollView';
import Details from '@/src/components/Details';
import LoginBtnNav from '@/src/components/LoginBtnNav';
import Nav from '@/src/components/NavHelp';
import PhoneNumberInput from '@/src/components/PhoneNumInput';
import { useInfo } from '@/src/context/InfoContext';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

export default function LoginIndex() {
  const { number } = useInfo();
  const navigation = useNavigation<any>();
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
          number && navigation.navigate('Register');
        }}
      />
    </AppKeyboardScrollView>
  );
}
