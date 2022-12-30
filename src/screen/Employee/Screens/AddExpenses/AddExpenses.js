import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import React, {useState} from 'react';

// @Components
import TxtInputContainer from '../../../../components/TxtInputContainer';
import ButtonComp from '../../../../components/ButtonComp';
import AddExpenseTxtinput from '../../Components/AddExpenseTxtinput';

const AddExpenses = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.secondContainer}>
        <Text style={styles.title}>AddExpenses</Text>
        {/* //Upload Container==================> */}
        <View style={styles.firstContainer}>
          <TouchableOpacity
            style={{
              borderWidth: 0.7,
              borderColor: 'gray',
              padding: '10%',

              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={styles.uplodImg}
              source={require('../../../../assets/Icons/upload.png')}
            />
            <Text style={styles.uplodTxt}>Upload Receipt</Text>
          </TouchableOpacity>
        </View>
        {/* //Upload Container==================> */}
        {/* //TextINPTS Container==================> */}
        <View style={{marginTop: 20}}>
          <AddExpenseTxtinput placeholder="Expense Name" />
          <AddExpenseTxtinput placeholder="Price" />
        </View>
        {/* //TextINPTS Container==================>END */}
        <View style={{marginTop: 30}}>
          <ButtonComp
            onpress={() => navigation.navigate('ExpenseDetails')}
            name="Add Expense"
          />
        </View>
      </View>
    </View>
  );
};

export default AddExpenses;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  secondContainer: {
    margin: 20,
    marginVertical: 40,
  },
  uplodImg: {
    height: 30,
    width: 30,
  },
  firstContainer: {
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
  },
  uplodTxt: {
    fontSize: 10,
    color: 'lightblack',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.61)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },
});
