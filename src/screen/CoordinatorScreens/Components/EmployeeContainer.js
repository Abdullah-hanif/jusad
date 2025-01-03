import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const EmployeeContainer = ({img, name, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.container}>
      {/* <Text>EmployeeContainer</Text> */}
      <View style={styles.imgName}>
        <View style={styles.insideImgName}>
          <Image
            resizeMode="contain"
            style={{height: 50, width: 50, borderRadius: 30}}
            source={img}
          />
          <Text style={{fontSize: 17, color: 'black', right: 15}}>{name}</Text>
        </View>
        <Image
          resizeMode="contain"
          style={{height: 25, width: 25, right: 10, borderRadius: 30}}
          source={require('../../../assets/Icons/Group16967.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default EmployeeContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    padding: 1,
    marginVertical: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'lightgray',

    shadowColor: '#000',
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
