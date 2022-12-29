import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';

// @Component
import FirstCompt from '../../Components/FirstCompt';
import StatusContainerList from './Components/StatusContainerList';
// import  from '../../Components/ContainerList';

const StatusScreen = ({navigation}) => {
  return (
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

          margin: 15,
          // alignItems: 'center',
        }}>
        <StatusContainerList
          onpress={() => navigation.navigate('CoEmployeeDetails')}
          first={true}
        />
        <StatusContainerList first={false} />
        <StatusContainerList first={false} />
        <StatusContainerList first={false} />
        <StatusContainerList first={false} />
      </ScrollView>
    </View>
  );
};

export default StatusScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
