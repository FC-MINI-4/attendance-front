import { atom } from 'recoil';
import { ISignup } from '@/types/ISignup';

export const signupState = atom<ISignup>({
  key: 'signupState',
  default: {
    profileUrl: '',
    position: '사원',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    hireDate: '',
    department: ''
  }
});
