import React from 'react';
import ScreenLayout from '../components/common/ScreenLayout';
import {SignedOutScreenProps} from '../navigators/types';

export default function SignIn({
  navigation,
  route,
}: SignedOutScreenProps<'SignIn'>) {
  return <ScreenLayout></ScreenLayout>;
}
