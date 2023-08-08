import { atom } from 'recoil';
import { ISignUp } from '@/types/ISignUp';

export const signUpState = atom<ISignUp>({
  key: 'signUpState',
  default: {
    profileUrl: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    hireDate: '',
    department: ''
  }
});
