import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';

// @Constants
import {color} from '../theme';

const TxtInputContainer = ({icon, placeholder}) => {
  return (
    <>
      <View style={styles.InputContainer}>
        <Image
          resizeMode="contain"
          style={{height: 25, width: 25}}
          source={icon}
        />
        <TextInput
          placeholderTextColor={'black'}
          style={{left: 5}}
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
    backgroundColor: color.white,
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginVertical: 5,
    borderWidth: 0.8,

    borderColor: color.gray,
  },
});
