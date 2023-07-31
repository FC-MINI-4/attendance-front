import { atom } from 'recoil';
import { ISignUp } from '@/types/ISignUp';

export const signUpState = atom<ISignUp>({
  key: 'signUpState',
  default: {
    profileUrl: '',
    position: '',
    name: '',
    email: '',
    password: '',
    checkedPwd: '',
    phone: '',
    hireDate: ''
  }
});
