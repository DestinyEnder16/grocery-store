import { Pressable, StyleSheet } from 'react-native';

interface rectangleProps {
  color: string;
  isActive: boolean;
}

export default function Rectangle({ color, isActive }: rectangleProps) {
  return (
    <Pressable
      style={[styles.rect, isActive && { backgroundColor: color }]}
    ></Pressable>
  );
}

const styles = StyleSheet.create({
  rect: {
    backgroundColor: '#F2F2F3',
    flex: 1,
    height: 3,
    borderRadius: 100,
  },
});
