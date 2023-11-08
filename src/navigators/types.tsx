import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type SignedInParams = {
  MainTabNav: NavigatorScreenParams<MainTabParams>;
  DrinkPage: {id: number};
  TakePhoto: undefined;
  SelectPhoto: undefined;
  TakeNote: undefined;
};

export type SignedInScreenProps<T extends keyof SignedInParams> =
  BottomTabScreenProps<SignedInParams, T>;

export type MainTabParams = {
  Home: {date: number} | undefined;
  Search: {searchKey: string} | undefined;
  TNoteUpload: undefined;
  Notifications: undefined;
  MyDrinks: undefined;
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
