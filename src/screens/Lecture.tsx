import React, {useEffect, useState} from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import {SignedInScreenProps} from '../navigators/types';
import styled from 'styled-components/native';
import {
  Chapter,
  PaginationDotWrapper,
  Payload,
  PayloadText,
  RowContainer,
  TitleContainer,
  TitleText,
} from '../components/common/Common';
import {HeaderIconBtn} from '../components/common/Header';
import {Ionicons} from '@expo/vector-icons';
import {Colors} from '../Config';
import {View} from 'react-native';
import PagerView from 'react-native-pager-view';
import PaginationDot from 'react-native-animated-pagination-dot';
import Toast from '../components/common/Toast';
import Modal from '../components/common/Modal';

const ModalContainer = styled.View`
  padding: 25px 40px;
  justify-content: center;
  width: 100%;
  /* align-items: center; */
`;

const ModalText = styled.Text`
  font-size: 16px;
  margin: 10px 0px 0px 0px;
`;

export default function Lecture({
  navigation,
  route: {params},
}: SignedInScreenProps<'Lecture'>) {
  const [currentPage, setCurrentPage] = useState(0);
  const [doneModal, setDoneModal] = useState(false);

  const lecture = {
    subject: '디자인 패턴과 프로그래밍 패러다임',
    chapter: '디자인 패턴',
    title: '서버도 컴퓨터에요',
    payload: [
      "디자인 패턴이란\n프로그램을 설계할 때 발생했던\n문제점들을 객체 간의 상호 관계 등을\n이용하여 해결할 수 있도록\n하나의 '규약' 형태로 만들어 놓은 것을 의미합니다.",
      'MVC 패턴은\nModel, View, Controller로 이루어진 디자인 패턴입니다.\n\n애플리케이션의 구성 요소를 세 가지 역할로 구분하여 개발 프로세스에서 각각의 구성 요소에만 집중해서 개발할 수 있습니다.',
      '재사용성과 확장성이 높다는 장점이 있고\n\n애플리케이션이 복잡해질수록 모델과 뷰의 관계가 복잡해지는 단점이 있습니다.',
    ],
  };
  useEffect(() => {
    navigation.setOptions({
      headerTitle: `${lecture.subject}`,
      headerRight: () => (
        <RowContainer style={{paddingHorizontal: 10}}>
          <HeaderIconBtn
            onPress={() => Toast({message: '보관함에 추가되었습니다.'})}>
            <Ionicons name="bookmark-outline" color="white" size={20} />
          </HeaderIconBtn>
          <HeaderIconBtn
            onPress={() => navigation.navigate('Interview', {interviewId: 1})}>
            <Ionicons name="chatbubbles-outline" color="white" size={20} />
          </HeaderIconBtn>
        </RowContainer>
      ),
    });
  }, []);

  return (
    <ScreenLayout safeAreaColor={Colors.subLight}>
      <PagerView
        initialPage={0}
        style={{flex: 1}}
        onPageSelected={e => {
          setCurrentPage(e.nativeEvent.position);

          if (e.nativeEvent.position === lecture.payload.length - 1) {
            setTimeout(() => {
              setDoneModal(true);
            }, 3000);
          }
        }}>
        {lecture.payload.map((payload, idx) => (
          <View key={idx}>
            {idx === 0 ? (
              <Chapter>
                <PayloadText
                  allowFontScaling={
                    false
                  }>{`# ${lecture.chapter}`}</PayloadText>
              </Chapter>
            ) : (
              <></>
            )}
            <Payload>
              <PayloadText allowFontScaling={false}>
                {lecture.payload[idx]}
              </PayloadText>
            </Payload>
          </View>
        ))}
      </PagerView>
      <PaginationDotWrapper>
        <PaginationDot
          activeDotColor="#262626"
          curPage={currentPage}
          maxPage={lecture.payload.length}
        />
      </PaginationDotWrapper>
      <Modal
        isVisible={doneModal}
        onClose={() => setDoneModal(false)}
        onConfirm={() => {
          setDoneModal(false);
          navigation.navigate('Quiz', {quizId: 1});
        }}
        onCloseEnd={() => {}}
        confirmText="문제 풀기"
        closeText="다음에"
        confirmDisabled={false}>
        <ModalContainer>
          <TitleText>{'🎉 수강 완료'}</TitleText>
          <ModalText>{'문제 풀기로 이동하시겠습니까?'}</ModalText>
        </ModalContainer>
      </Modal>
    </ScreenLayout>
  );
}
