/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Search from '../screens/Search';
import {MainTabParams} from './types';
import TabIcon from '../components/nav/TabIcon';
import MyDrinks from '../screens/MyDrinks';
import TNoteCreate from '../screens/TNoteCreate';
import Notifications from '../screens/Notifications';
import Toast from '../components/common/Toast';
import Empty from '../screens/Empty';
import {Text, TouchableOpacity, View} from 'react-native';
import Modal from '../components/common/Modal';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {RowContainer} from '../components/common/Common';
import {Colors} from '../Config';
import styled from 'styled-components/native';
import {Ionicons} from '@expo/vector-icons';
import BottomSheet, {BottomSheetItem} from '../components/common/BottomSheet';

const TabBarContainer = styled.View<{insetBottom: number}>`
  flex-direction: row;
  padding: 10px 0px ${props => props.insetBottom}px 0px;
  border-top-width: 0.5px;
  border-top-color: ${Colors.borderLight};
  background-color: ${Colors.white};
`;

const Tab = createBottomTabNavigator<MainTabParams>();

function TabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const [isBtmModal, setBtmModal] = useState(false);
  const insets = useSafeAreaInsets();

  const iconNames = ['list', 'search', 'add', 'notifications', 'person'];
  const tabs: {
    key: string;
    name: string;
    params?: any; // 나중에 define!!!!!!!
    icon: keyof typeof Ionicons.glyphMap;
  }[] = [];
  iconNames.forEach((icon, index) => {
    index === 2
      ? tabs.push({key: 'Add', name: 'Add', icon: 'add'})
      : tabs.push({...state.routes[index < 2 ? index : index - 1], icon});
  });

  return (
    <TabBarContainer insetBottom={insets.bottom}>
      {tabs.map((tab, index) => {
        const isFocused =
          index === 2 ? false : state.index === (index < 2 ? index : index - 1);

        const onPress = () => {
          if (index === 2) {
            setBtmModal(true);
          } else {
            const event = navigation.emit({
              type: 'tabPress',
              target: tab.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(tab.name, tab.params);
            }
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: tab.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <TabIcon name={tab.icon} isFocused={isFocused} />
          </TouchableOpacity>
        );
      })}
      <BottomSheet
        title="테이스팅 노트 작성"
        isVisible={isBtmModal}
        onClose={() => setBtmModal(false)}>
        <BottomSheetItem
          iconName="camera-outline"
          iconSize={22}
          payload="사진 촬영"
          onPress={() => {
            setBtmModal(false);
            navigation.navigate('TakePhoto');
          }}
        />
        <BottomSheetItem
          iconName="images-outline"
          iconSize={20}
          payload="갤러리에서 사진 선택"
          onPress={() => {
            setBtmModal(false);
            navigation.navigate('SelectPhoto');
          }}
        />
        <BottomSheetItem
          iconName="pencil"
          iconSize={20}
          payload="사진 없이 기록하기"
          onPress={() => {
            setBtmModal(false);
            navigation.navigate('TakeNote');
          }}
        />
      </BottomSheet>
    </TabBarContainer>
  );
}

export default function MainTabNav() {
  const [isUpModal, setUpModal] = useState(false);
  return (
    <Tab.Navigator
      tabBar={props => <TabBar {...props} />}
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: 'left',
        headerShadowVisible: false,
        // headerTitleStyle: {fontFamily: 'nanum-bold'},
        tabBarHideOnKeyboard: true,
        headerStyle: {backgroundColor: Colors.main}, // '#102245'
        headerTintColor: 'white',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({}) => ({
          headerTitle: 'Proper Drink',
        })}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={({}) => ({
          headerTitle: 'Search',
        })}
      />

      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={({}) => ({
          headerTitle: 'Notifications',
        })}
      />

      <Tab.Screen
        name="MyDrinks"
        component={MyDrinks}
        options={({}) => ({
          headerTitle: 'MyDrinks',
        })}
      />
    </Tab.Navigator>
  );
}
