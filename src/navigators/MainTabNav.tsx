/* eslint-disable react/no-unstable-nested-components */
import React, {useState} from 'react';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import {MainTabParams} from './types';
import TabIcon from '../components/nav/TabIcon';
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
import MyPage from '../screens/MyPage';
import InterviewHome from '../screens/InterviewHome';
import QuizHome from '../screens/QuizHome';
import ModalLh, {ModalItem} from '../components/common/ModalLh';
import {observer} from 'mobx-react-lite';
import authStore from '../stores/AuthStore';
import LectureHome from '../screens/LectureHome';
import {
  HeaderIconBtn,
  HeaderTitleBtn,
  HeaderTitleText,
} from '../components/common/Header';

const TabBarContainer = styled.View<{insetBottom: number}>`
  flex-direction: row;
  padding: 10px 0px ${props => props.insetBottom}px 0px;
  border-top-width: 0.5px;
  border-top-color: ${Colors.borderLight};
  background-color: ${Colors.white};
`;

const PointText = styled.Text`
  font-size: 17px;
  /* font-weight: 600; */
  color: white;
`;

function HeaderTitle() {
  const [isModal, setModal] = useState(false);

  return (
    <>
      <HeaderTitleBtn onPress={() => setModal(!isModal)}>
        <RowContainer>
          <HeaderTitleText>
            {authStore.isAdvanced ? 'Advanced' : 'Basic'}
          </HeaderTitleText>
          <Ionicons name="chevron-down" color="white" size={17} />
        </RowContainer>
      </HeaderTitleBtn>
      <ModalLh
        isVisible={isModal}
        onClose={() => setModal(false)}
        confirmDisabled={false}
        onConfirm={() => {}}
        onCloseEnd={() => {}}>
        <ModalItem
          // iconName="camera-outline"
          // iconSize={22}
          payload="Basic"
          onPress={() => {
            setModal(false);
            authStore.setAdvanced(false);
          }}
          isSelected={!authStore.isAdvanced}
        />
        <ModalItem
          // iconName="camera-outline"
          // iconSize={22}
          payload="Advanced"
          onPress={() => {
            setModal(false);
            authStore.setAdvanced(true);
          }}
          isSelected={authStore.isAdvanced}
        />
      </ModalLh>
    </>
  );
}

observer(HeaderTitle);

const Tab = createBottomTabNavigator<MainTabParams>();

function TabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const [isBtmModal, setBtmModal] = useState(false);
  const insets = useSafeAreaInsets();

  const iconNames = ['home', 'list', 'add', 'notifications', 'person'];
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
  // const [isUpModal, setUpModal] = useState(false);

  return (
    <Tab.Navigator
      // tabBar={props => <TabBar {...props} />}
      screenOptions={{
        // tabBarShowLabel: false,
        headerTitleAlign: 'left',
        headerShadowVisible: false,
        // headerTitleStyle: {fontFamily: 'nanum-bold'},
        tabBarHideOnKeyboard: true,
        headerStyle: {backgroundColor: Colors.main}, // '#102245'
        headerTintColor: 'white',
        headerTitle: HeaderTitle,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          // headerTitle: '홈',
          headerRight: () => (
            <RowContainer style={{paddingHorizontal: 10}}>
              <HeaderIconBtn
                onPress={() => navigation.navigate('Notifications')}>
                <Ionicons
                  name="notifications-outline"
                  color="white"
                  size={20}
                />
              </HeaderIconBtn>
              <HeaderIconBtn onPress={() => {}}>
                <RowContainer>
                  <Ionicons name="logo-bitcoin" color="white" size={20} />
                  <PointText style={{marginLeft: 5}}>101</PointText>
                </RowContainer>
              </HeaderIconBtn>
              <HeaderIconBtn onPress={() => {}}>
                <RowContainer>
                  <PointText>{`Lv. ${1}`}</PointText>
                </RowContainer>
              </HeaderIconBtn>
            </RowContainer>
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon name="home" isFocused={focused} />
          ),
          tabBarLabel: 'Home',
        })}
      />
      <Tab.Screen
        name="LectureHome"
        component={LectureHome}
        options={({}) => ({
          // headerTitle: '홈',
          headerRight: () => (
            <RowContainer style={{paddingHorizontal: 10}}>
              <HeaderIconBtn onPress={() => {}}>
                <RowContainer>
                  <PointText>{`Lv. ${1}`}</PointText>
                </RowContainer>
              </HeaderIconBtn>
            </RowContainer>
          ),
          tabBarIcon: ({focused}) => (
            <TabIcon name="file-tray-full" isFocused={focused} />
          ),
          tabBarLabel: 'Lecture',
        })}
      />

      <Tab.Screen
        name="QuizHome"
        component={QuizHome}
        options={({}) => ({
          // headerTitle: 'Quiz',
          tabBarIcon: ({focused}) => (
            <TabIcon name="create" isFocused={focused} />
          ),
          tabBarLabel: 'Quiz',
        })}
      />

      <Tab.Screen
        name="InterviewHome"
        component={InterviewHome}
        options={({}) => ({
          // headerTitle: 'Interview',
          tabBarIcon: ({focused}) => (
            <TabIcon name="chatbubbles" isFocused={focused} />
          ),
          tabBarLabel: 'GPT',
        })}
      />

      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={({navigation}) => ({
          headerTitle: 'tiobi',
          tabBarIcon: ({focused}) => (
            <TabIcon name="person" isFocused={focused} />
          ),
          // headerRight: () => (
          //   <RowContainer style={{paddingHorizontal: 10}}>
          //     <HeaderIconBtn onPress={() => {}}>
          //       <Ionicons name="cog-outline" color="white" size={20} />
          //     </HeaderIconBtn>
          //   </RowContainer>
          // ),
          tabBarLabel: 'MY',
        })}
      />
    </Tab.Navigator>
  );
}
