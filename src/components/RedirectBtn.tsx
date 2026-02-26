import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function RedirectBtn() {
  const navigation = useNavigation<any>();
  return (
    <Pressable
      style={[
        styles.btn,
        {
          backgroundColor: '#000',
          flex: 1,
        },
      ]}
      onPress={() => navigation.navigate('LoginLayout')}
    >
      <Text style={styles.txt}>Get Started</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
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
    color: 'white',
  },
});
