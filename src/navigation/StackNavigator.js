import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

// @Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// @Screens
import Splash from '../screen/SplashScreen/Splash';
import Login from '../screen/Login/Login';
import NeedService from '../screen/NeedService/NeedService';
import Notification from '../screen/Notification/Notification';
import Details from '../screen/Details/Details';
import Forget from '../screen/Forget/Forget';
import Otp from '../screen/OTP/Otp';
import NewPassword from '../screen/NewPassword/NewPassword';

// @Navigation Screens
import BottomTabNavigator from './BottomTabNavigator';
import {useNavigation} from '@react-navigation/native';
import {color} from '../theme';

const StackNavigator = () => {
  const nav = useNavigation();
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="Forget" component={Forget} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="NewPassword" component={NewPassword} />

      {/* @Stack inside Screen */}
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Need Service',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold', color: 'white'},
          headerStyle: {backgroundColor: color.primmary, height: 70},
          headerLeft: () => {
            return (
              <>
                <TouchableOpacity onPress={() => nav.goBack()}>
                  <Image
                    resizeMode="contain"
                    style={{height: 30, width: 30}}
                    source={require('../assets/Icons/back-1.png')}
                  />
                </TouchableOpacity>
              </>
            );
          },
        }}
        name="NeedService"
        component={NeedService}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Notification',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold', color: 'white'},
          headerStyle: {backgroundColor: color.primmary, height: 70},
          headerLeft: () => {
            return (
              <>
                <TouchableOpacity onPress={() => nav.goBack()}>
                  <Image
                    resizeMode="contain"
                    style={{height: 30, width: 30}}
                    source={require('../assets/Icons/back-1.png')}
                  />
                </TouchableOpacity>
              </>
            );
          },
        }}
        name="Notification"
        component={Notification}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: 'Details',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold', color: 'white'},
          headerStyle: {backgroundColor: color.primmary, height: 70},
          headerLeft: () => {
            return (
              <>
                <TouchableOpacity onPress={() => nav.goBack()}>
                  <Image
                    resizeMode="contain"
                    style={{height: 30, width: 30}}
                    source={require('../assets/Icons/back-1.png')}
                  />
                </TouchableOpacity>
              </>
            );
          },
        }}
        name="Details"
        component={Details}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
