import { StyleSheet, TextInput } from 'react-native';

export default function NumInputField() {
  return <TextInput style={styles.field} maxLength={1} textAlign="center" />;
}

const styles = StyleSheet.create({
  field: {
    backgroundColor: '#F2F2F3',
    height: 71,
    width: 70,
    borderRadius: 10,
    fontFamily: 'Poppins-Font-Bold',
    fontSize: 20,
    color: '#0D0D0D',
  },
});
