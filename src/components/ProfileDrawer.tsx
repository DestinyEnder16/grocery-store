import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import ProfilePicture from './ProfilePicture';

interface profileProps {
  fn?: any;
  height?: number;
  width?: number;
}

export default function ProfileDrawer({ fn, width, height }: profileProps) {
  const navigation = useNavigation<any>();

  return (
    <Pressable onPress={() => (fn ? fn() : navigation.toggleDrawer())}>
      {/* <Text>Open drawer</Text> */}
      <ProfilePicture width={width && width} height={height && height} />
    </Pressable>
  );
}
