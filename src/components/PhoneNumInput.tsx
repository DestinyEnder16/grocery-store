import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import PhoneInput from 'react-phone-number-input/react-native-input';
import { useInfo } from '../context/InfoContext';
import CountryModal from './CountryModal';

export default function PhoneNumberInput() {
  const [showModal, setShowModal] = useState(false);

  const { country, number, setNumber, setCountry } = useInfo();

  return (
    <View style={styles.container}>
      <View>
        {/*  */}

        <Pressable style={styles.code} onPress={() => setShowModal(true)}>
          <View>
            <Text>{country.flag}</Text>
          </View>
          <View>
            <Text style={styles.dial_code}>{country.dial_code}</Text>
          </View>
        </Pressable>

        {showModal && (
          <CountryModal setShowModal={setShowModal} fn={setCountry} />
        )}
      </View>

      <View style={{ flex: 1 }}>
        <PhoneInput
          style={styles.inputField}
          value={number}
          country={country.code}
          onChange={setNumber}
          placeholder="Phone Number"
          placeholderTextColor="#0D0D0D"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  code: {
    height: 52,
    flexDirection: 'row',
    padding: 10,
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#F2F2F3',
    borderRadius: 8,
  },
  dial_code: {
    fontFamily: 'Poppins-Font',
  },
  inputField: {
    backgroundColor: '#F2F2F3',
    borderRadius: 8,
    height: 52,
    padding: 10,
    fontFamily: 'Poppins-Font',
  },
});
