import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNav from './MainTabNav';
import {SignedInParams} from './types';
import DrinkPage from '../screens/DrinkPage';
import {Platform} from 'react-native';

const Stack = createStackNavigator<SignedInParams>();

export default function SignedInNav() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTintColor: '#23222b',
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
    </Stack.Navigator>
  );
}
