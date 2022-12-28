import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import ButtonComp from '../../../../components/ButtonComp';

const ExpenseDetails = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
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
        <View style={{marginVertical: '20%'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text style={styles.titleStyle}>Your Expences</Text>
            <TouchableOpacity>
              <Image
                resizeMode="contain"
                style={{height: 35, width: 35}}
                source={require('../../../../assets/Icons/Group-2.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* //Bus TIcket START========================> */}
        <View style={styles.ticketContainer}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'white',
              justifyContent: 'space-between',
              width: '50%',
              alignItems: 'center',
            }}>
            <Image
              resizeMode="contain"
              style={{height: 50, width: 50}}
              source={require('../../../../assets/Icons/gitprofile.png')}
            />
            <Text>Bus Ticket</Text>
          </View>
          <Text style={{fontWeight: 'bold', color: 'black'}}>5.00 EUR</Text>
        </View>
        {/* //Bus TIcket END========================> */}
        {/*START Submit Taskk Button */}
        <View style={{marginVertical: 30}}>
          <ButtonComp
            onpress={() => setModalVisible(true)}
            name="Submit Task"
          />
        </View>
        {/*END Submit Taskk Button */}
        {/* //Modal Screen */}
      </View>
      <Modal
        statusBarTranslucent={true}
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View
            style={{
              backgroundColor: 'white',
              width: Dimensions.get('screen').width - 30,
              padding: 30,
              borderRadius: 20,
            }}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                resizeMode="contain"
                style={{height: 80, width: 80}}
                source={require('../../../../assets/Icons/Group16996.png')}
              />
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: 'black',
                    fontSize: 18,
                    marginVertical: 20,
                  }}>
                  Submitted Sucessfully
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{textAlign: 'center'}}>
              Your task has been submited succesfully
            </Text>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default ExpenseDetails;

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
  servicetTimeContainer: {
    marginVertical: 10,
    backgroundColor: 'white',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  ticketContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.61)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
