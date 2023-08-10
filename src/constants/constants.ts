import { IAuthSignUp } from '@/types/IAuth';

// 이메일 유효성 정규식
export const rEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 영문+숫자로 이루어진 8자리 이상, 16자리 이하 유효성 정규식
export const rPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,16}$/;

export const MEMBER_USER_INFO = {
  employeeId: 0,
  department: '',
  name: '',
  email: '',
  phone: '',
  hireDate: '',
  profileImagePath: ''
};

export const SIGNUP_INPUT_INFO: IAuthSignUp[] = [
  {
    label: '이름*',
    name: 'name',
    placeholder: '이름을 입력해주세요',
    type: 'text'
  },
  {
    label: '이메일*',
    name: 'email',
    button: '중복확인',
    placeholder: '예) jindojoon@soonyang.com',
    type: 'email'
  },
  {
    label: '비밀번호*',
    name: 'password',
    placeholder: '영문, 숫자 조합 8-16자',
    type: 'password'
  },
  {
    label: '비밀번호 확인*',
    name: 'confirmPassword',
    placeholder: '비밀번호를 한번 더 입력해주세요.',
    type: 'password'
  },
  {
    label: '휴대폰 번호*',
    name: 'phone',
    placeholder: '숫자만 입력해주세요',
    type: 'tel'
  }
];
