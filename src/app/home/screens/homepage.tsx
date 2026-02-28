import ProfileDrawer from '@/src/components/ProfileDrawer';
import ScreenView from '@/src/components/ScreenView';

export default function Homepage() {
  return (
    <ScreenView headline="Home Screen">
      <ProfileDrawer />
    </ScreenView>
  );
}
