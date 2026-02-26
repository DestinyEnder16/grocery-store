import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

interface navProps {
  shouldGoBack?: boolean;
}

export default function Nav({ shouldGoBack = false }: navProps) {
  const navigation = useNavigation<any>();
  return (
    <View
      style={[
        styles.container,
        !shouldGoBack && { justifyContent: 'flex-end' },
      ]}
    >
      {shouldGoBack && (
        <Pressable onPress={() => navigation.goBack()}>
          <Ionicons
            name="chevron-back-sharp"
            size={20}
            color={'#aaa'}
          ></Ionicons>
        </Pressable>
      )}

      <View>
        <Pressable style={styles.icon}>
          <Ionicons name="help" size={20} color={'#aaa'} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    backgroundColor: '#ddddddac',
    borderRadius: 100,
    padding: 2,
  },
});
