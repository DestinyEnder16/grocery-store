import ProfileDrawer from '@/src/components/ProfileDrawer';
import ScreenView from '@/src/components/ScreenView';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'space-between',
  },
  view: {
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  pagetxt: {
    fontFamily: 'Poppins-Font',
    fontSize: 24,
  },
});

export default function Homepage() {
  return (
    <ScreenView headline="Home Screen">
      <ProfileDrawer />
    </ScreenView>
  );
}
