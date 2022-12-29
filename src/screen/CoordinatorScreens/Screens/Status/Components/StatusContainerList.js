import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {color} from '../../../../../theme';

const StatusContainerList = ({first, onpress}) => {
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
            height: 80,
            width: 1,
            backgroundColor: color.primmary,
            borderRadius: 20,
          }}></View>
      </View>
      <View
        style={{
          margin: 20,
          borderWidth: 1,
          borderColor: 'lightgray',
          right: 15,
          width: '90%',
          marginTop: 20,
          marginVertical: '1%',
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
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{color: 'gray'}}>Client:</Text>
              <Text style={{color: 'gray'}}>Service:</Text>
            </View>
            <View style={{left: 10}}>
              <Text style={{color: 'black', fontWeight: 'bold', right: 12}}>
                Sara Martin
              </Text>
              <Text style={{color: 'black', fontWeight: 'bold', right: 5}}>
                Cleaning House
              </Text>
            </View>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{height: 30, width: 30}}
              source={require('../../../../../assets/Icons/Group13150.png')}
            />
            <Text style={{fontSize: 10, color: '#27da00'}}>In Prograss</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StatusContainerList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
});
