import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import ProfilePicture from './ProfilePicture';

interface profileProps {
  fn?: any;
}

export default function ProfileDrawer({ fn }: profileProps) {
  const navigation = useNavigation<any>();

  return (
    <Pressable onPress={() => (fn ? fn() : navigation.toggleDrawer())}>
      {/* <Text>Open drawer</Text> */}
      <ProfilePicture />
    </Pressable>
  );
}
