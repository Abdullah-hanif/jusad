import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React from 'react';

// @Constants
import { color } from '../theme';

const TxtInputContainer = ({ icon, placeholder, setTxt }) => {
  return (
    <>
      <View style={styles.InputContainer}>
        <Image
          resizeMode="contain"
          style={{ height: 25, width: 25, left: 5, tintColor: 'gray' }}
          source={icon}
        />
        <TextInput
          placeholderTextColor={'gray'}
          style={{ left: 15, color: 'black',  width: '85%' }}
          onChangeText={txt => setTxt(txt)}
          placeholder={placeholder}
        />
      </View>
    </>
  );
};

export default TxtInputContainer;

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor: color.white,
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 7,
    borderWidth: 0.8,
    width: '100%',
    borderColor: color.gray,
  },
});
