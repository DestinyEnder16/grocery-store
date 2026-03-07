import ProfileDrawer from '@/src/components/ProfileDrawer';
import ScreenView from '@/src/components/ScreenView';
// import { Linking } from 'react-native';

export default function Homepage() {
  return (
    <ScreenView headline="Home Screen">
      <ProfileDrawer />
    </ScreenView>
  );
}
