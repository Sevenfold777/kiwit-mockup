import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNav from './MainTabNav';
import {SignedInParams} from './types';
import DrinkPage from '../screens/DrinkPage';
import {Platform} from 'react-native';
import TNoteCreate from '../screens/TNoteCreate';
import TakePhoto from '../screens/Uploads/TakePhoto';
import SelectPhoto from '../screens/Uploads/SelectPhoto';
import TakeNote from '../screens/Uploads/TakeNote';
import {Colors} from '../Config';

const Stack = createStackNavigator<SignedInParams>();

export default function SignedInNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTintColor: Colors.white,
        headerStyle: {backgroundColor: Colors.main},
        // headerTitleStyle: { fontFamily: "nanum-bold" },
        headerTitleAlign: 'left',
        ...(Platform.OS === 'ios' && {
          // animationEnabled: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          gestureResponseDistance: 400,
          gestureVelocityImpact: 1,
        }),
      }}>
      <Stack.Screen
        name="MainTabNav"
        component={MainTabNav}
        options={{headerShown: false}}
      />
      <Stack.Screen name="DrinkPage" component={DrinkPage} />

      <Stack.Screen name="TakePhoto" component={TakePhoto} />
      <Stack.Screen name="SelectPhoto" component={SelectPhoto} />
      <Stack.Screen name="TakeNote" component={TakeNote} />
    </Stack.Navigator>
  );
}
