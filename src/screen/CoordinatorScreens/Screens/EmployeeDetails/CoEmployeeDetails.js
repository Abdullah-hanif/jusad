import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

// @maps
import MapView, {Marker} from 'react-native-maps';
import {color} from '../../../../theme';

const CoEmployeeDetails = () => {
  const mapRef = React.useRef();

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.secoundContainer}>
        <Text style={styles.titleStyle}>SeriviceTime</Text>

        <View
          style={{
            marginVertical: 10,
            backgroundColor: 'white',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
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
        <Text style={styles.titleStyle}>Curent Location</Text>
        {/* <===========================MAP SCREEN HERE=======================> */}

        <View style={{marginTop: 30}}>
          <View
            style={{
              position: 'absolute',
              zIndex: 1,
              width: '90%',
              margin: 10,
            }}>
            <TouchableOpacity onPress={() => working} style={styles1.container}>
              <Image
                resizeMode="contain"
                style={{height: 30, width: 30}}
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
        {/* //============================>EMPLOYEE DETAILS===========================> */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            marginTop: 10,
          }}>
          <View>
            <View>
              <Text style={styles.detailTitle}>Employee</Text>
              <Text style={styles.detailStyle}>John Michel</Text>
            </View>
            <View style={{marginVertical: 20}}>
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
            <View style={{marginVertical: 20}}>
              <Text style={styles.detailTitle}>Client</Text>
              <Text style={styles.detailStyle}>Sara Martin</Text>
            </View>
          </View>
          {/* //Secound END*/}
        </View>
        {/* //============================>EMPLOYEE DETAILS END===========================> */}
      </View>
      {/* <===========================MAP SCREEN HERE=======================> */}
    </ScrollView>
  );
};

export default CoEmployeeDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secoundContainer: {
    margin: 10,
    marginVertical: 20,
    backgroundColor: 'white',
  },
  titleStyle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
  },
  map: {
    // flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width - 20,
    height: Dimensions.get('screen').height / 2,

    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 4,
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 5.46,

    // elevation: 9,
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
