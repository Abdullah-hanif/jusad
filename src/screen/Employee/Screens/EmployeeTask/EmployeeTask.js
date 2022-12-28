import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import ContainerList from '../../../CoordinatorScreens/Components/ContainerList';

// @Compoents
import FirstCompt from '../../../CoordinatorScreens/Components/FirstCompt';

const EmployeeTask = ({navigation}) => {
  return (
    <>
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
            onpress={() => navigation.navigate('EmpServiceDetails')}
            first={true}
          />
          <ContainerList first={false} />
          <ContainerList first={false} />
        </ScrollView>
      </View>
    </>
  );
};

export default EmployeeTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
