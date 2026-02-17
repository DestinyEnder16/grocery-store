import { Pressable, StyleSheet, Text, View } from 'react-native';

interface btnProps {
  text: string;
  fn?: () => void;
  backgroundColor?: string;
  color?: string;
}

export default function LoginBtnNav({
  text,
  backgroundColor,
  color,
  fn,
}: btnProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          fn && fn();
        }}
        style={[styles.btn, backgroundColor && { backgroundColor }]}
      >
        <Text style={[styles.txt, color && { color }]}>{text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    bottom: 0,
  },
  btn: {
    backgroundColor: '#0D0D0D',
    paddingVertical: 14,
    borderRadius: 100,
  },
  txt: {
    color: '#fff',
    fontFamily: 'Poppins-Font-Semibold',
    textAlign: 'center',
  },
});
