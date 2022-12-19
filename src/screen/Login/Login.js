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
const Login = () => {
  return (
    <>
      <StatusBar hidden />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <HeaderComp />
        {/* //Secound main Container Start */}
        <View style={styles.secoundContainer}>
          <Text style={styles.loginTxt}>Login</Text>

          {/* //Input container start */}
          <TxtInputContainer
            icon={require('../../assets/Icons/Group4274.png')}
            placeholder="Email Address"
          />
          <TxtInputContainer
            icon={require('../../assets/Icons/Login.png')}
            placeholder="Password"
          />

          {/* //Input container End */}
          <TouchableOpacity>
            <Text
              style={{
                textAlign: 'right',
                color: 'black',
                fontWeight: 'bold',
                marginVertical: 5,
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity>

          {/* //Button */}
          <View style={{marginTop: 50}}>
            <ButtonComp />
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
