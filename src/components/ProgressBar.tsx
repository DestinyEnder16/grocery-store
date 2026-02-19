import { View } from 'react-native';
import Rectangle from './Rectangle';

interface progressBarProps {
  numBars: number;
  color: string;
  activeIndex: number;
}

export default function ProgressBar({
  numBars,
  color,
  activeIndex,
}: progressBarProps) {
  return (
    <View
      style={{
        flexDirection: 'row',
        paddingHorizontal: 20,
        gap: 8,
      }}
    >
      {Array.from({ length: numBars }).map((_, index) => (
        <Rectangle key={index} color={color} isActive={index === activeIndex} />
      ))}
    </View>
  );
}
