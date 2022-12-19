import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// @Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// @Screens
import Splash from '../screen/SplashScreen/Splash';
import Login from '../screen/Login/Login';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
