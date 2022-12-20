import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

// @Navigtions
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color} from '../theme';

// @Screens
import MytimeLine from '../screen/MyTimeline/MytimeLine';
import Settings from '../screen/Settings/Settings';
const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerTitle: 'User',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontWeight: 'bold', color: 'white'},
          headerStyle: {backgroundColor: color.primmary, height: 70},
          tabBarLabel: 'My Timeline',
          tabBarLabelStyle: {textAlign: 'center'},
          tabBarStyle: {justifyContent: 'center', alignItems: 'center'},
          tabBarIcon: () => {
            return (
              <>
                <Image
                  resizeMode="contain"
                  style={{height: 25, width: 25}}
                  source={require('../assets/Icons/Group4646.png')}
                />
              </>
            );
          },
          headerRight: () => {
            return (
              <>
                <Image
                  resizeMode="contain"
                  style={{height: 25, width: 25, right: 10}}
                  source={require('../assets/Icons/Group10609.png')}
                />
              </>
            );
          },
        }}
        name="MytimeLine"
        component={MytimeLine}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return (
              <>
                <Image
                  resizeMode="contain"
                  style={{height: 25, width: 25}}
                  source={require('../assets/Icons/Settings.png')}
                />
              </>
            );
          },
        }}
        name="Settings"
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({});
