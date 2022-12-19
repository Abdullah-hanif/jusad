import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {color} from '../../theme';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Login');
  }, 2000);
  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          style={{height: 300, width: 300}}
          source={require('../../assets/Icons/image_2022_10_25T14_41_46_052Z.png')}
        />
      </View>
    </>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.primmary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
