import ProfileDrawer from '@/src/components/ProfileDrawer';
import ScreenView from '@/src/components/ScreenView';
import { useUser } from '@/src/context/UserContext';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

type ProfileRouteParams = {
  Profile: { id?: string };
};

export default function ProfileScreen({ Profile }: ProfileRouteParams) {
  const route = useRoute<RouteProp<ProfileRouteParams, 'Profile'>>();
  const { setUserId, userId } = useUser();

  // IMPORTANT: When navigating to Profile from another screen, do not use route.params
  const { id } = route.params ?? {};

  useEffect(() => {
    if (id !== undefined) {
      setUserId(id);
    }
  }, [id, setUserId]);

  // const params = route.params;
  return (
    <ScreenView headline={`Welcome ${userId}`}>
      <ProfileDrawer />
    </ScreenView>
  );
}
