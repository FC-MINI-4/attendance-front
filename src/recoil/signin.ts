import { atom } from 'recoil';
import { ISigninRequestBody } from '@/types/ISignin';

export const signinState = atom<ISigninRequestBody>({
  key: 'signinState',
  default: {
    email: '',
    password: ''
  }
});
