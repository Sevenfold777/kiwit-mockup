import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {MainTabScreenProps} from '../navigators/types';
import ScreenLayout from '../components/common/ScreenLayout';
import {ScrollView} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import QuizGroup from '../components/quiz/QuizGroup';
import {RowContainer} from '../components/common/Common';
import {BottomSheetItem} from '../components/common/BottomSheet';
import Modal from '../components/common/Modal';
import {HeaderIconBtn} from '../components/common/Header';
import Toast from '../components/common/Toast';
import {Colors} from '../Config';

const ModalContainer = styled.View`
  padding: 15px 35px;
  justify-content: center;
  align-items: center;
`;

const Filter = styled.TouchableOpacity<{selected: boolean}>`
  margin: 0px 3px;
  padding: 5px 10px;
  border-radius: 15px;
  background-color: ${props => (props.selected ? Colors.sub : Colors.subLight)};
`;

const FilterText = styled.Text``;

export default function QuizHome({navigation}: MainTabScreenProps<'QuizHome'>) {
  // const categoryList: CategoryType[] = [{title: '', icon: ''}];

  const [isFilterModal, setFilterModal] = useState(false);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <>
          <RowContainer style={{paddingHorizontal: 10}}>
            <HeaderIconBtn onPress={() => setFilterModal(true)}>
              <Ionicons name="options-outline" color="white" size={20} />
            </HeaderIconBtn>
          </RowContainer>
          <Modal
            isVisible={isFilterModal}
            onClose={() => setFilterModal(false)}
            onConfirm={() => setFilterModal(false)}
            onCloseEnd={() => {}}
            confirmDisabled={false}>
            <ModalContainer>
              <BottomSheetItem
                iconName="flag-outline"
                iconSize={20}
                payload="Level 설정"
                onPress={() => Toast({message: '구현 예정'})}
              />
              <BottomSheetItem
                iconName="document-text-outline"
                iconSize={20}
                payload="과목 설정"
                onPress={() => Toast({message: '구현 예정'})}
              />
            </ModalContainer>
          </Modal>
        </>
      ),
    });
  }, [isFilterModal]);

  return (
    <ScreenLayout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}>
        <ScrollView
          contentContainerStyle={{marginTop: 5, marginBottom: 15}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {[
            'Lv : 전체',
            '과목 : 전체',
            '알고리즘',
            '자료구조',
            '데이터베이스',
            '운영체제',
          ].map((sub, idx) => (
            <Filter key={idx} selected={true}>
              <FilterText>{sub}</FilterText>
            </Filter>
          ))}
        </ScrollView>

        <QuizGroup />
        <QuizGroup />
        <QuizGroup />
        <QuizGroup />
      </ScrollView>
    </ScreenLayout>
  );
}
