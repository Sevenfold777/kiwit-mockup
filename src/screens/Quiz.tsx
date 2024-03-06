import React, {useEffect, useState} from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import {SignedInScreenProps} from '../navigators/types';
import {
  Chapter,
  PaginationDotWrapper,
  Payload,
  PayloadText,
  RowContainer,
} from '../components/common/Common';
import {HeaderIconBtn} from '../components/common/Header';
import {Ionicons} from '@expo/vector-icons';
import {Colors} from '../Config';
import PagerView from 'react-native-pager-view';
import PaginationDot from 'react-native-animated-pagination-dot';
import {ScrollView, TouchableWithoutFeedback, View} from 'react-native';
import Toast from '../components/common/Toast';

export default function Quiz({
  navigation,
  route: {params},
}: SignedInScreenProps<'Quiz'>) {
  //   const quiz = {
  //     subject: '일상 속 컴퓨터',
  //     chapter: '모두 컴퓨터랍니다',
  //     //   chapterNum: 5,
  //     title: '서버도 컴퓨터에요',
  //   };

  const [currentPage, setCurrentPage] = useState(0);

  const quiz = {
    subject: '디자인 패턴과 프로그래밍 패러다임',
    chapter: '디자인 패턴',
    title: '서버도 컴퓨터에요',
    payload: [
      'Q. 다음 중 MVC 패턴에 대한 설명으로 올바르지 않은 것은? \n\na) 모델은 애플리케이션의 데이터와 비즈니스 로직을 나타냅니다.\
    \n\nb) 뷰는 사용자 인터페이스를 나타내며 데이터를 표시하는 역할을 합니다.\
    \n\nc) 컨트롤러는 사용자 입력을 받고 모델을 업데이트하는 역할을 합니다.\
    \n\nd) MVC 패턴은 모델, 뷰 및 컨트롤러가 서로 완전히 독립적으로 작동하는 것을 보장합니다.',
    ],
  };

  useEffect(() => {
    navigation.setOptions({
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback
          onPress={() => Toast({message: '답 클릭되게 구현'})}>
          <Payload>
            <PayloadText allowFontScaling={false}>
              {quiz.payload[0]}
            </PayloadText>
          </Payload>
        </TouchableWithoutFeedback>
      </ScrollView>
    </ScreenLayout>
  );
}
