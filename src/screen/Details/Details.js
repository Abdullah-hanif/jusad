import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Details = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.secoundContainer}>
        <Text style={styles.headingTxt}>Service Time</Text>
        {/*Start clock Container */}
        <View
          style={{
            marginVertical: 10,
            backgroundColor: 'white',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/Icons/Group40.png')}
            />
            <Text>Start Time</Text>
            <Text style={{color: 'black'}}>Not Started Yet</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{height: 50, width: 50}}
              source={require('../../assets/Icons/Group40.png')}
            />
            <Text>Start Time</Text>
            <Text style={{color: 'black'}}>Not Started Yet</Text>
          </View>
        </View>

        {/*END clock Container */}

        {/* Employee Details Started */}
        <Text style={styles.headingTxt}>Employee Details</Text>
        <View
          style={{
            backgroundColor: 'white',
            marginVertical: 20,
            paddingVertical: 10,
          }}>
          {/* //first */}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <View style={{right: 37, backgroundColor: 'white'}}>
              <View>
                <Text style={styles.detailTitle}>Employee</Text>
                <Text style={styles.detailStyle}>John Michel</Text>
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={styles.detailTitle}>Employee ID</Text>
                <Text style={styles.detailStyle}>77889866</Text>
              </View>
            </View>
            {/* //Secound */}
            <View>
              <View>
                <Text style={styles.detailTitle}>Age</Text>
                <Text style={styles.detailStyle}>38 Years Old</Text>
              </View>
              <View style={{marginVertical: 20}}>
                <Text style={styles.detailTitle}>Gender</Text>
                <Text style={styles.detailStyle}>Male</Text>
              </View>
            </View>
            {/* //Secound END*/}
          </View>
          {/* //first END*/}
          <Text style={styles.detailTitle}>About Employee</Text>
          <Text style={{color: 'black'}}>
            lorem is dhkj hdk fhks jdhf skjf hsk jh fk dsj dsfhksjfjsfhksd sdhdj
            jdk djhjs dhjd dhd ks si didis huudh ddhd si hhhd iie shhsei hhe hd
            jdk djhjs dhjd dhd ks si didis huudh ddhd si hhhd iie shhsei hhe hd
          </Text>
        </View>
        {/* Employee Details ENDED */}
        {/* //Photos */}
        <Text style={styles.headingTxt}>Photos</Text>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Image
            resizeMode="contain"
            style={{borderRadius: 10, width: '100%'}}
            source={require('../../assets/Icons/profileimg.jpg')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secoundContainer: {
    backgroundColor: 'white',
    margin: 10,
  },
  headingTxt: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
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
