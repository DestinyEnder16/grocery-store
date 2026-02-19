import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { CountryPicker } from 'react-native-country-codes-picker';

interface modalProps {
  fn: React.Dispatch<React.SetStateAction<any>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CountryModal({ fn, setShowModal }: modalProps) {
  const [show, setShow] = useState(true);

  return (
    <View style={styles.container}>
      <CountryPicker
        style={{
          modal: {
            height: 500,
          },
          searchMessageText: {
            fontFamily: 'Poppins-Font',
          },
          dialCode: {
            display: 'none',
          },
        }}
        lang="en"
        show={show}
        // when picker button press you will get the country object with dial code
        pickerButtonOnPress={(item) => {
          setShow(false);
          setShowModal(false);
          fn(item);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
