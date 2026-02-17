import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface tabProps {
  text: string;
  index: number;
  selectedId: number;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
}

export default function Tab({
  text,
  index,
  selectedId,
  setSelected,
}: tabProps) {
  return (
    <TouchableOpacity onPress={() => setSelected(index)}>
      <Text
        style={[
          styles.category,
          index === selectedId && {
            outlineWidth: 1.5,
            outlineColor: '#2DB217',
            backgroundColor: '#1ED7001A',
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  category: {
    backgroundColor: '#F8F9FA',
    fontFamily: 'Poppins-Font-Semibold',
    borderRadius: 100,
    paddingVertical: 6,
    paddingHorizontal: 20,
  },
});
