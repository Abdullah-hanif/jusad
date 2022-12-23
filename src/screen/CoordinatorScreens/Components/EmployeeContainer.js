import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const EmployeeContainer = ({img, name}) => {
  return (
    <View style={styles.container}>
      {/* <Text>EmployeeContainer</Text> */}
      <View style={styles.imgName}>
        <View style={styles.insideImgName}>
          <Image
            resizeMode="contain"
            style={{height: 50, width: 50, borderRadius: 30}}
            source={img}
          />
          <Text style={{fontSize: 17, color: 'black'}}>{name}</Text>
        </View>
        <Image
          resizeMode="contain"
          style={{height: 25, width: 25, right: 10, borderRadius: 30}}
          source={require('../../../assets/Icons/Group16967.png')}
        />
      </View>
    </View>
  );
};

export default EmployeeContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    padding: 1,
    borderRadius: 5,
    borderWidth: 1,
    shadowColor: '#000',
    borderColor: 'lightgray',
    marginVertical: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  imgName: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  insideImgName: {
    padding: 10,

    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    justifyContent: 'space-between',
  },
});
