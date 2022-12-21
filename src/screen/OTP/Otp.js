import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {color} from '../../theme';

// @Components
import TxtInputContainer from '../../components/TxtInputContainer';
import HeaderComp from '../../components/HeaderComp';
import ButtonComp from '../../components/ButtonComp';

// @languge convertor
import {useTranslation} from 'react-i18next';
const Otp = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <>
      <StatusBar hidden />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <HeaderComp />
        {/* //Secound main Container Start */}
        <View style={styles.secoundContainer}>
          <Text style={styles.loginTxt}> {t('common:enterotp')}</Text>

          {/* //OTP VIew Here */}

          {/* //Button */}
          <View style={{marginTop: 50}}>
            <ButtonComp
              name={t('common:Done')}
              onpress={() => navigation.navigate('Otp')}
            />
          </View>
        </View>

        {/* //Secound main Container END */}
      </ScrollView>
    </>
  );
};

export default Otp;

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
});
