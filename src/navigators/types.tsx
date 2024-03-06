import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type SignedInParams = {
  MainTabNav: NavigatorScreenParams<MainTabParams>;
  Lecture: {lectureId: number};
  Quiz: {quizId: number};
  Interview: {interviewId: number};

  LectureList: {level?: number; lecturesCnt?: number};
  QuizList: {groupId?: number; quizCnt?: number};
  Notifications: undefined;
};

export type SignedInScreenProps<T extends keyof SignedInParams> =
  BottomTabScreenProps<SignedInParams, T>;

export type MainTabParams = {
  Home: {date: number} | undefined;
  LectureHome: {searchKey: string} | undefined;
  QuizHome: undefined;
  InterviewHome: undefined;
  MyPage: undefined;
};

export type MainTabScreenProps<T extends keyof MainTabParams> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParams, T>,
    SignedInScreenProps<keyof SignedInParams>
  >;

export type SignedOutParams = {
  Home: undefined;
  Search: {searchKey: string} | undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends SignedInParams {}
  }
}
