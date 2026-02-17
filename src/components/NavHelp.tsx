import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

interface navProps {
  shouldGoBack?: boolean;
}

export default function Nav({ shouldGoBack = false }: navProps) {
  const router = useRouter();
  return (
    <View
      style={[
        styles.container,
        !shouldGoBack && { justifyContent: 'flex-end' },
      ]}
    >
      {shouldGoBack && (
        <Pressable onPress={() => router.back()}>
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
