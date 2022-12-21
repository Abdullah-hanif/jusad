import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {color} from '../../theme';

// @Components
import TxtInputContainer from '../../components/TxtInputContainer';
import HeaderComp from '../../components/HeaderComp';
import ButtonComp from '../../components/ButtonComp';

// @languge convertor
import {useTranslation} from 'react-i18next';
const NewPassword = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const {t} = useTranslation();
  return (
    <>
      <StatusBar hidden />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <HeaderComp />
        {/* //Secound main Container Start */}
        <View style={styles.secoundContainer}>
          <Text style={styles.loginTxt}>{t('common:createnewPassword')}</Text>

          {/* //Input container start */}
          <TxtInputContainer
            icon={require('../../assets/Icons/Login.png')}
            placeholder={t('common:newpassword')}
          />
          <TxtInputContainer
            icon={require('../../assets/Icons/Login.png')}
            placeholder={t('common:confirmnewpassword')}
          />

          {/* //Input container End */}

          {/* //Button */}
          <View style={{marginTop: 50}}>
            <ButtonComp
              name={t('common:Done')}
              //   onpress={() => navigation.navigate('BottomTabNavigator')}
              onpress={() => setModalVisible(true)}
            />
          </View>
        </View>

        {/* //Secound main Container END */}
        {/* //Modal Screen */}
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
                  source={require('../../assets/Icons/Group16996.png')}
                />
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      color: 'black',
                      fontSize: 18,
                      marginVertical: 20,
                    }}>
                    {t('common:passwordCreated')}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={{textAlign: 'center'}}>
                {t('common:yournewPasscreatsucee')}
              </Text>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </>
  );
};

export default NewPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  secoundContainer: {
    flex: 1,
    backgroundColor: color.white,
    padding: 20,
  },
  loginTxt: {
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 30,
    fontSize: 20,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.61)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
