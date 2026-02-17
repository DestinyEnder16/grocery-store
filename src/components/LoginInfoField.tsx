import { View } from 'react-native';

interface fieldProps {
  Img: React.ReactNode;
}

export default function LoginInfoField({ Img }: fieldProps) {
  return <View>{Img}</View>;
}
