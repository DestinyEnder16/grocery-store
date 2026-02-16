import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface detailsProp {
  heading: string;
  text: string | React.ReactNode;
  extra_txt?: string;
  children?: React.ReactNode;
}

export default function Details({
  heading,
  text,
  extra_txt,
  children,
}: detailsProp) {
  return (
    <View>
      <Pressable style={styles.icon}>
        <Ionicons name="help" size={20} color={'#aaa'} />
      </Pressable>

      <View>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.txt}>{text}</Text>
      </View>

      {(children || extra_txt) && (
        <View style={{ marginTop: 20, gap: 12 }}>
          {extra_txt && <Text style={styles.extra_txt}>{extra_txt}</Text>}

          {children && children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  icon: {
    alignSelf: 'flex-end',
    backgroundColor: '#ddddddac',
    borderRadius: 100,
    padding: 2,
  },
  heading: {
    fontFamily: 'Poppins-Font-Semibold',
    fontSize: 20,
  },
  txt: {
    fontSize: 16,
    fontFamily: 'Poppins-Font',
    color: '#777777',
    marginTop: 10,
  },
  extra_txt: {
    fontFamily: 'Poppins-Font-Semibold',
    fontSize: 14,
  },
});
