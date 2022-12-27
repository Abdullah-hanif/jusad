import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const FirstCompt = () => {
  return (
    <>
      <View style={styles.firstContainer}>
        <View
          style={{
            flexDirection: 'row',
            // backgroundColor: 'yellow',
            width: '35%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          {/* <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  right: '10%',
                  color: 'black',
                }}>
                {'<'}
              </Text> */}
          <Image
            resizeMode="contain"
            style={{height: 20, width: 20}}
            source={require('../../../assets/Icons/back.png')}
          />
          <Text style={{fontWeight: 'bold', color: 'black'}}>Today</Text>
          <Image
            resizeMode="contain"
            style={{height: 25, width: 25}}
            source={require('../../../assets/Icons/calender.png')}
          />
          <Image
            resizeMode="contain"
            style={{height: 20, width: 20}}
            source={require('../../../assets/Icons/back-2.png')}
          />
        </View>
      </View>
    </>
  );
};

export default FirstCompt;

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
