import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
// @component
import EmployeeContainer from '../Components/EmployeeContainer';
const Employees = ({navigation}) => {
  const employeeData = [
    {
      id: 1,
      name: 'john Mikeal',
      imageuir: require('../../../assets/Icons/profileimg.jpg'),
    },
    {
      id: 2,
      name: 'john Mikeal',
      imageuir: require('../../../assets/Icons/profileimg.jpg'),
    },
    {
      id: 3,
      name: 'john Mikeal',
      imageuir: require('../../../assets/Icons/profileimg.jpg'),
    },
    {
      id: 4,
      name: 'john Mikeal',
      imageuir: require('../../../assets/Icons/profileimg.jpg'),
    },
  ];
  return (
    <View style={styles.container}>
      <ScrollView style={styles.secoundContainer}>
        {employeeData.map((data, index) => {
          return (
            <EmployeeContainer
              onpress={() => navigation.navigate('StatusScreen')}
              img={data.imageuir}
              name={data.name}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Employees;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secoundContainer: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
    marginTop: 20,

    // paddingVertical: 20,
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
