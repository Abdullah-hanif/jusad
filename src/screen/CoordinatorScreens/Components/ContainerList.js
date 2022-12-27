import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../../../theme';

const ContainerList = ({first, onpress}) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            height: 20,
            width: 20,
            // backgroundColor: 'green',
            borderWidth: 1,
            borderColor: color.primmary,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 10,
            borderRadius: 20,
          }}>
          <View
            style={{
              height: 15,
              width: 15,
              backgroundColor: first ? color.primmary : 'white',
              borderRadius: 20,
            }}></View>
        </View>
        <View
          style={{
            height: 120,
            width: 1,
            backgroundColor: color.primmary,
            borderRadius: 20,
          }}></View>
      </View>
      <View
        style={{
          margin: 20,
          borderWidth: 1,
          borderColor: 'gray',
          right: 15,
          width: '90%',
          padding: 10,
          borderRadius: 20,
        }}>
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
              justifyContent: 'space-around',
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
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Sara Martin
              </Text>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Cleaning House
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../../assets/Icons/Group16967.png')}
            />
            <Text style={{fontSize: 10}}>View Details</Text>
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
});
