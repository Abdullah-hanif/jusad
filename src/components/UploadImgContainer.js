import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const UploadImgContainer = () => {
  return (
    <View
      style={{
        // marginVertical: 10,
        // padding: 20,
        // paddingHorizontal: 25,
        margin: 10,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 10,
        // backgroundColor: 'yellow',
      }}>
      <Image
        style={{height: 110, width: 100, borderRadius: 10}}
        source={require('../assets/Icons/dummy.jpeg')}
      />
    </View>
  );
};

export default UploadImgContainer;

const styles = StyleSheet.create({});
