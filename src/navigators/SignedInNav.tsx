import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainTabNav from './MainTabNav';
import {SignedInParams} from './types';
import {Platform} from 'react-native';
import {Colors} from '../Config';
import Interview from '../screens/Interview';
import Quiz from '../screens/Quiz';
import Notifications from '../screens/Notifications';
import Lecture from '../screens/Lecture';
import LectureList from '../screens/LectureList';
import QuizList from '../screens/QuizList';

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

      <Stack.Screen name="Lecture" component={Lecture} />
      <Stack.Screen name="LectureList" component={LectureList} />

      <Stack.Screen name="Quiz" component={Quiz} />
      <Stack.Screen name="QuizList" component={QuizList} />

      <Stack.Screen name="Interview" component={Interview} />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        options={{headerTitle: '알림'}}
      />
      {/* <Stack.Screen name="DrinkPage" component={DrinkPage} />
      <Stack.Screen name="TakePhoto" component={TakePhoto} />
      <Stack.Screen name="SelectPhoto" component={SelectPhoto} />
      <Stack.Screen name="TakeNote" component={TakeNote} /> */}
    </Stack.Navigator>
  );
}
