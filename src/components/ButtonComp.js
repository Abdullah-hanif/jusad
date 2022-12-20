import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

// @Constants
import {color} from '../theme';

const ButtonComp = ({onpress, name}) => {
  return (
    <>
      <TouchableOpacity onPress={onpress} style={styles.container}>
        <Text style={styles.txtStyle}>{name}</Text>
      </TouchableOpacity>
    </>
  );
};

export default ButtonComp;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: color.primmary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  txtStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
});
