/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import {MainTabParams} from './types';
import TabIcon from '../components/nav/TabIcon';

const Tab = createBottomTabNavigator<MainTabParams>();

export default function MainTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: 'left',
        headerShadowVisible: false,
        // headerTitleStyle: {fontFamily: 'nanum-bold'},
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({}) => ({
          headerTitle: 'Proper Drink',
          tabBarIcon: ({focused}) => (
            <TabIcon name="home" isFocused={focused} />
          ),
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={({}) => ({
          headerTitle: 'Search',
          tabBarIcon: ({focused}) => (
            <TabIcon name="search" isFocused={focused} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
