import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// @Navigation
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// @Screens
import Splash from '../screen/SplashScreen/Splash';
import Login from '../screen/Login/Login';
import NeedService from '../screen/NeedService/NeedService';

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
    </Stack.Navigator>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
