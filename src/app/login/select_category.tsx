import CategoryTab from '@/src/components/CategoryTab';
import Details from '@/src/components/Details';
import LoginBtnNav from '@/src/components/LoginBtnNav';
import Nav from '@/src/components/NavHelp';
import { containerStyles } from '@/src/constants/data';
import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Select_Category() {
  const router = useRouter();
  return (
    <SafeAreaView style={containerStyles.container}>
      <View>
        <Nav shouldGoBack={true} />

        <Details
          heading="All your grocery need in one place"
          text="Select your desired shop category"
        >
          <CategoryTab />
        </Details>
      </View>

      <LoginBtnNav
        text="Continue"
        fn={() => router.navigate('/login/location')}
      />
    </SafeAreaView>
  );
}
