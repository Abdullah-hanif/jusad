import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ContainerList from '../Components/ContainerList';

// @Compoents
import FirstCompt from '../Components/FirstCompt';

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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            flex: 1,
            backgroundColor: 'white',
            // justifyContent: 'center',

            margin: 10,
            // alignItems: 'center',
          }}>
          <ContainerList
            onpress={() => navigation.navigate('ServiceDetails')}
            first={true}
          />
          <ContainerList first={false} />
          <ContainerList first={false} />
          <ContainerList first={false} />

          {/* <Image
            resizeMode="contain"
            style={{height: 80, width: 80}}
            source={require('../../../assets/Icons/calendar-1.png')}
          />
          <Text style={{color: 'lightgray', fontWeight: 'bold'}}>
            No service today
          </Text>
        </View> */}
          {/* </ScrollView> */}
        </ScrollView>
      </View>
    </>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
