import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

interface pfp_props {
  height?: number;
  width?: number;
}

export default function ProfilePicture({ height = 50, width = 50 }: pfp_props) {
  const blurhash = 'L24eTl~VIo0f-@t8NGR*9gE2R%%L';

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/planet-pfp.jpg')}
        style={[styles.pfp, { height, width }]}
        cachePolicy={'memory-disk'}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 2, marginBottom: 10 },
  pfp: {
    borderRadius: 100,
  },
});
