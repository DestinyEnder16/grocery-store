import { Pressable, StyleSheet, Text, View } from 'react-native';

interface btnProps {
  activeIndex: number;
  lastIndex: number;
  fn: (num: number) => void;
}

export default function BtnNav({ activeIndex, lastIndex, fn }: btnProps) {
  return (
    <View style={styles.container}>
      {activeIndex !== lastIndex ? (
        <>
          <Pressable style={styles.btn} onPress={() => fn(lastIndex)}>
            <Text style={styles.txt}>Skip</Text>
          </Pressable>
          <Pressable
            style={[
              styles.btn,
              {
                backgroundColor: '#000',
              },
            ]}
            onPress={() => fn(activeIndex + 1)}
          >
            <Text
              style={[
                styles.txt,
                {
                  color: '#fff',
                },
              ]}
            >
              Next
            </Text>
          </Pressable>
        </>
      ) : (
        <Pressable
          style={[
            styles.btn,
            {
              backgroundColor: '#000',
              flex: 1,
            },
          ]}
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
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
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
