import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

export const styles = StyleSheet.create({
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
