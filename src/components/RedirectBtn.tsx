import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function RedirectBtn() {
  const router = useRouter();
  return (
    <Pressable
      style={[
        styles.btn,
        {
          backgroundColor: '#000',
          flex: 1,
        },
      ]}
      onPress={() => router.navigate('/login')}
    >
      <Text
        style={[
          styles.txt,
          {
            color: '#fff',
          },
        ]}
      >
        Get Started
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#F2F2F3',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 100,
    width: 185,
    height: 52,
  },

  txt: {
    textAlign: 'center',
    fontFamily: 'Poppins-Font',
    fontWeight: '600',
  },
});
