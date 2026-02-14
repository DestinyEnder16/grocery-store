import { Dimensions, StyleSheet, Text, View } from 'react-native';

interface screenProps {
  // Use 'any' or 'ImageSource' to accept both imported local files and URLs
  headline: string;
  text: string;
  Img: React.ReactNode;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');
export default function Screen({ headline, text, Img }: screenProps) {
  return (
    <View style={styles.container}>
      {/* expo-image is smart enough to handle a direct import or a URL string here */}
      {/* <Logo width={120} height={40} /> */}

      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View>{Img}</View>
        <Text style={styles.headline}>{headline}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SCREEN_WIDTH,
  },

  headline: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Font-Semibold',
    marginBottom: 8,
  },
  text: {
    color: 'gray',
    fontSize: 16,
    fontFamily: 'Poppins-Font',
    textAlign: 'center',
    lineHeight: 28,
  },
});
