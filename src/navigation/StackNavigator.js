import {StyleSheet, Text, View} from 'react-native';
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
import {color} from '../theme';

const StackNavigator = () => {
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
                <Text style={{fontSize: 30, color: 'white'}}>{'<'}</Text>
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
                <Text style={{fontSize: 30, color: 'white'}}>{'<'}</Text>
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
                <Text style={{fontSize: 30, color: 'white'}}>{'<'}</Text>
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
