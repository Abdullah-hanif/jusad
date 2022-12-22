import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

// @Navigtions
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {color} from '../theme';

// @Screens
import MytimeLine from '../screen/MyTimeline/MytimeLine';
import Settings from '../screen/Settings/Settings';

const BottomTabNavigator = ({navigation}) => {
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
          tabBarLabelStyle: {
            textAlign: 'center',
            fontSize: 12,
            bottom: 6,
            color: 'gray',
          },
          tabBarStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 70,
            padding: 10,
            paddingVertical: 5,
          },

          tabBarIcon: ({focused}) => {
            return (
              <>
                <Image
                  resizeMode="contain"
                  style={{
                    height: 25,
                    width: 25,
                    tintColor: focused ? color.primmary : 'gray',
                  }}
                  source={require('../assets/Icons/Group4646.png')}
                />
              </>
            );
          },
          headerRight: () => {
            return (
              <>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notification')}>
                  <Image
                    resizeMode="contain"
                    style={{height: 25, width: 25, right: 20}}
                    source={require('../assets/Icons/Group10609.png')}
                  />
                </TouchableOpacity>
              </>
            );
          },
        }}
        name="MytimeLine"
        component={MytimeLine}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {textAlign: 'center', fontSize: 12, bottom: 6},
          tabBarStyle: {
            justifyContent: 'center',
            alignItems: 'center',
            height: 70,
            padding: 10,
            paddingVertical: 5,
          },
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
