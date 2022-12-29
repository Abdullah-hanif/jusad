import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../../../theme';

const ContainerList = ({first, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View style={styles.ballBorder}>
          <View
            style={[
              styles.ballStyle,
              {backgroundColor: first ? color.primmary : 'white'},
            ]}></View>
        </View>
        <View style={styles.lineStyle}></View>
      </View>
      <View style={styles.boxContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              backgroundColor: 'white',
              width: '75%',
              marginTop: 10,
              flexDirection: 'row',
              // justifyContent: 'space-around',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: 'gray'}}>Employee:</Text>
              <Text style={{color: 'gray'}}>Client:</Text>
              <Text style={{color: 'gray'}}>Service:</Text>
            </View>
            <View>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                John Michel
              </Text>
              <Text style={{color: 'black', fontWeight: 'bold', right: 20}}>
                Sara Martin
              </Text>
              <Text style={{color: 'black', fontWeight: 'bold', right: 10}}>
                Cleaning House
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../../assets/Icons/Group16967.png')}
            />
            <Text style={styles.viewDetails}>View Details</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContainerList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  ballBorder: {
    height: 20,
    width: 20,
    // backgroundColor: 'green',
    borderWidth: 1,
    borderColor: color.primmary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 20,
  },
  ballStyle: {
    height: 15,
    width: 15,

    borderRadius: 20,
  },
  lineStyle: {
    height: 100,
    width: 1,
    backgroundColor: color.primmary,
    borderRadius: 20,
  },
  boxContainer: {
    margin: 20,
    borderWidth: 1,
    borderColor: 'lightgray',
    marginVertical: '2%',
    right: 15,
    width: '90%',
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  viewDetails: {fontSize: 10, color: 'black'},
});
