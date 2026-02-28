import ProfileDrawer from '@/src/components/ProfileDrawer';
import ScreenView from '@/src/components/ScreenView';

export default function ProfileScreen() {
  return (
    <ScreenView headline="Profile">
      <ProfileDrawer />
    </ScreenView>
  );
}
