import CategoryTab from '@/src/components/CategoryTab';
import Details from '@/src/components/Details';
import LoginBtnNav from '@/src/components/LoginBtnNav';
import Nav from '@/src/components/NavHelp';
import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Select_Category() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
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
