import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const Task = ({navigation}) => {
  return (
    <>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          zIndex: 1,
          marginBottom: 20,
          right: 20,
          alignItems: 'flex-end',
          alignSelf: 'flex-end',
          //   flexDirection: 'row-reverse',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('CoordintorStack', {screen: 'AssignTask'})
          }>
          <Image
            resizeMode="contain"
            style={{height: 60, width: 60}}
            source={require('../../../assets/Icons/Group16987.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        {/* <Text>Task</Text> */}

        <FirstCompt />
        {/* <ScrollView> */}
        <View
          style={{
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            resizeMode="contain"
            style={{height: 80, width: 80}}
            source={require('../../../assets/Icons/calendar-1.png')}
          />
          <Text style={{color: 'lightgray', fontWeight: 'bold'}}>
            No service today
          </Text>
        </View>
        {/* </ScrollView> */}
      </View>
    </>
  );
};

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

export default Task;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  firstContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});