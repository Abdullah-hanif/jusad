import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import ButtonComp from '../../../../components/ButtonComp';

const EmpServiceDetails1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.secoundContainer}>
        <Text style={styles.titleStyle}>Serivice Time</Text>

        <View style={styles.servicetTimeContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{height: 70, width: 70}}
              source={require('../../../../assets/Icons/Group40.png')}
            />
            <Text>Start Time</Text>
            <Text style={{color: 'black'}}>10:34 AM</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{height: 70, width: 70}}
              source={require('../../../../assets/Icons/Group40.png')}
            />
            <Text>End Time</Text>
            <Text style={{color: 'black'}}>On Service</Text>
          </View>
        </View>
        <View style={{marginHorizontal: '25%', marginTop: 20}}>
          <ButtonComp name="End Service" />
        </View>
        <View style={{marginVertical: '20%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.titleStyle}>Your Expences</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('AddExpenses')}>
              <Image
                resizeMode="contain"
                style={{height: 35, width: 35}}
                source={require('../../../../assets/Icons/Group-2.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={{marginVertical: '15%'}}>
            <ButtonComp name="Submit Task" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EmpServiceDetails1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secoundContainer: {
    margin: 20,
    marginVertical: 40,
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  servicetTimeContainer: {
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
