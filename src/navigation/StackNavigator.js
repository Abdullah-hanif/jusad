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

// @Coordinator Screens
import AssignTask from '../screen/CoordinatorScreens/Screens/AssignTask';
import ServiceDetails from '../screen/CoordinatorScreens/Screens/ServiceDetails/ServiceDetails';
import CoEmployeeDetails from '../screen/CoordinatorScreens/Screens/EmployeeDetails/CoEmployeeDetails';

// @Navigation Screens
import BottomTabNavigator from './BottomTabNavigator';
import {CoordinatorBottom} from './BottomTabNavigator';
import {useNavigation} from '@react-navigation/native';
import {color} from '../theme';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  const nav = useNavigation();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />

      <Stack.Screen name="CoordintorStack" component={CoordintorStack} />

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

//@COORDINATOR StackNAVIGATIOR

const options = {
  headerShown: true,

  headerTitleAlign: 'center',
  headerTitleStyle: {fontWeight: 'bold', color: 'white'},
  headerStyle: {backgroundColor: color.primmary, height: 70},
};

const CoordintorStack = () => {
  const nav = useNavigation();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="CoordinatorBottom" component={CoordinatorBottom} />
      <Stack.Screen
        options={{
          ...options,
          headerTitle: 'Assign New Task',
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
        name="AssignTask"
        component={AssignTask}
      />
      <Stack.Screen
        options={{
          ...options,
          headerTitle: 'Service Details',
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
        name="ServiceDetails"
        component={ServiceDetails}
      />
      <Stack.Screen
        options={{
          ...options,
          headerTitle: 'Employee Details',
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
        name="CoEmployeeDetails"
        component={CoEmployeeDetails}
      />
    </Stack.Navigator>
  );
};

// =======================================END CoordintorStack=============================>

export default StackNavigator;

const styles = StyleSheet.create({});
