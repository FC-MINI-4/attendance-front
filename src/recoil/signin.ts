import { atom } from 'recoil';
import { ISignInRequestBody } from '@/types/ISignIn';

export const signInState = atom<ISignInRequestBody>({
  key: 'signInState',
  default: {
    email: '',
    password: ''
  }
});
