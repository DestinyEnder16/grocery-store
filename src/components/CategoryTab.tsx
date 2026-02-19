import { categories } from '@/src/constants/data';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Tab from './Tab';

export default function CategoryTab() {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <View style={styles.container}>
      {categories.map((datum, index) => (
        <Tab
          key={index}
          text={datum}
          index={index}
          selectedId={selectedId}
          setSelected={setSelectedId}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 20,
    flexWrap: 'wrap',
    alignItems: 'center',
  },
});
