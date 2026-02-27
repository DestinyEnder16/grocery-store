import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

export default function ProfilePicture() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/planet-pfp.jpg')}
        style={styles.pfp}
        // width={'100%'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 2, marginBottom: 10 },
  pfp: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
});
