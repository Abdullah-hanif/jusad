import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import ButtonComp from '../../../../components/ButtonComp';

// @maps
import MapView, { Marker } from 'react-native-maps';
import { color } from '../../../../theme';

const EmpServiceDetails = ({ navigation }) => {
  const mapRef = React.useRef();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.secoundContainer}>
        {/* //first */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
          }}>
          <View>
            <View>
              <Text style={styles.detailTitle}>Employee</Text>
              <Text style={styles.detailStyle}>John Michel</Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.detailTitle}>Task</Text>
              <Text style={styles.detailStyle}>Cleaning House</Text>
            </View>
          </View>
          {/* //Secound */}
          <View>
            <View>
              <Text style={styles.detailTitle}>Date & Time</Text>
              <Text style={styles.detailStyle}>9th Jan,10:30PM</Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Text style={styles.detailTitle}>Client</Text>
              <Text style={styles.detailStyle}>Sara Martin</Text>
            </View>
          </View>
          {/* //Secound END*/}
        </View>
        {/* //first END*/}

        {/* //HOME Address==============================================> */}
        <View style={{ backgroundColor: 'white' }}>
          <Text style={styles.detailTitle}>Home Address</Text>
          <Text style={styles.detailStyle}>
            812 N Main St,Flora ,IL 62839,USA
          </Text>
        </View>
        {/* //HOME Address==============================================>END */}
        {/* //Comment ==============================================> */}
        <View style={{ backgroundColor: 'white', marginVertical: 10 }}>
          <Text style={styles.detailTitle}>Comments</Text>
          <Text style={[styles.detailStyle, { fontWeight: '200' }]}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy
          </Text>
        </View>
        {/* //Comment==============================================>END */}
        {/* //PHOTOS ==============================================> */}
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.detailStyle}>Photos</Text>
          <View
            style={{
              flexDirection: 'row',

              right: 10,
            }}>
            <PhotoContainer />
            <PhotoContainer />
          </View>
        </View>
        {/* //PHOTOS ==============================================>END */}
        {/* @MAP SCREEN  */}
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              width: '90%',
              margin: 10,
            }}>
            <TouchableOpacity style={styles1.container}>
              <Image
                resizeMode="contain"
                style={{ height: 30, width: 30 }}
                source={require('../../../../assets/Icons/Group4036.png')}
              />
              <Text style={styles1.txtStyle}>
                C.Luis Placelss.16,28340,Barcelona
              </Text>
            </TouchableOpacity>
            {/* <ButtonComp
                onpress={() => setModalVisible(true)}
                name={t('common:sendrequest')}
              /> */}
          </View>
        </View>

        <MapView
          ref={mapRef}
          // style={StyleSheet.absoluteFill}
          style={styles.map}
          initialRegion={{
            latitude: 41.3874,
            longitude: 2.1686,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{
              latitude: 41.3874,
              longitude: 2.1686,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}>
            <Image
              resizeMode="contain"
              source={require('../../../../assets/Icons/Group4243.png')}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </Marker>
        </MapView>
      </View>
      <View style={{ margin: 10 }}>
        <ButtonComp
          onpress={() => navigation.navigate('EmpServiceDetails1')}
          name="Start Service"
        />
      </View>
    </ScrollView>
  );
};

const PhotoContainer = () => {
  return (
    <>
      <Image
        // resizeMode="contain"
        style={{
          height: 100,
          width: 100,
          borderRadius: 10,
          top: 10,
          marginHorizontal: 10,
        }}
        source={require('../../../../assets/Icons/dummy.jpeg')}
      />
    </>
  );
};

export default EmpServiceDetails;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secoundContainer: {
    margin: 10,
    marginVertical: 20,
  },
  detailTitle: {
    fontSize: 14,
    color: 'gray',
  },
  detailStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  map: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 20,
    height: Dimensions.get('screen').height / 2,

  },
});
const styles1 = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: color.primmary,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    flexWrap: 'wrap',
  },
  txtStyle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 13,
  },
});
