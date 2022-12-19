import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

// @Constants
import {color} from '../theme';

const HeaderComp = () => {
  return (
    <>
      <View style={styles.headerComp}>
        <Image
          resizeMode="contain"
          style={{height: 200, width: 200}}
          source={require('../assets/Icons//MaskGroup1.png')}
        />
      </View>
    </>
  );
};
export default HeaderComp;

const styles = StyleSheet.create({
  headerComp: {
    height: '30%',
    backgroundColor: color.primmary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
