import { Pressable, StyleSheet, Text, View } from 'react-native';

interface btnProps {
  text: string;
  fn?: () => void;
}

export default function LoginBtnNav({ text, fn }: btnProps) {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          fn && fn();
        }}
        style={styles.btn}
      >
        <Text style={styles.txt}>{text}</Text>
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
    fontFamily: 'Poppins-Font',
    textAlign: 'center',
  },
});
