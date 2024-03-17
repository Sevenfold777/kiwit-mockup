import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignedOutParams} from './types';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createStackNavigator<SignedOutParams>();

export default function SignedOutNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}
