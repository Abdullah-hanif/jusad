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
const Login = ({navigation}) => {
  const [type, setType] = React.useState('');

  const loginUser = () => {
    if (type == 'Coordinator@gmail.com') {
      navigation.navigate('CoordintorStack');
    } else if (type == 'Employee@gmail.com') {
      navigation.navigate('EmployeeStack');
    } else {
      navigation.navigate('BottomTabNavigator');
    }
  };
  const {t} = useTranslation();
  return (
    <>
      <StatusBar hidden />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <HeaderComp />
        {/* //Secound main Container Start */}
        <View style={styles.secoundContainer}>
          <Text style={styles.loginTxt}>{t('common:login')}</Text>

          {/* //Input container start */}
          <TxtInputContainer
            setTxt={txt => setType(txt)}
            icon={require('../../assets/Icons/Group4274.png')}
            placeholder={t('common:Emailaddress')}
          />
          <TxtInputContainer
            icon={require('../../assets/Icons/Login.png')}
            placeholder={t('common:password')}
          />

          {/* //Input container End */}
          <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
            <Text
              style={{
                textAlign: 'right',
                color: 'black',
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              {t('common:ForgotPassword')}
            </Text>
          </TouchableOpacity>

          {/* //Button */}
          <View style={{marginTop: 50}}>
            <ButtonComp name={t('common:login')} onpress={() => loginUser()} />
          </View>
        </View>

        {/* //Secound main Container END */}
      </ScrollView>
    </>
  );
};

export default Login;

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
