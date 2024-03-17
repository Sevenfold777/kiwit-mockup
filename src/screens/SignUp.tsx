import React from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import {SignedOutScreenProps} from '../navigators/types';

export default function SignUp({
  navigation,
  route,
}: SignedOutScreenProps<'SignUp'>) {
  return <ScreenLayout></ScreenLayout>;
}
