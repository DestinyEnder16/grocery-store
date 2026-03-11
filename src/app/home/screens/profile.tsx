import ProfileDrawer from '@/src/components/ProfileDrawer';
import ScreenView from '@/src/components/ScreenView';
import { useUser } from '@/src/context/UserContext';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';

type ProfileRouteParams = {
  Profile: { id?: string; email?: string };
};

export default function ProfileScreen({ Profile }: ProfileRouteParams) {
  const route = useRoute<RouteProp<ProfileRouteParams, 'Profile'>>();
  const { setUserId, userId, setUserEmail } = useUser();

  // IMPORTANT: When navigating to Profile from another screen, do not use route.params
  const { id, email } = route.params ?? {};

  useEffect(() => {
    console.log(route);
    if (id !== undefined) {
      setUserId(id);
    }
    if (email !== undefined) {
      setUserEmail(email);
    }
  }, [id, setUserId, setUserEmail, email, route]);

  // const params = route.params;
  return (
    <ScreenView headline={`Welcome ${userId}`}>
      <ProfileDrawer />
    </ScreenView>
  );
}
