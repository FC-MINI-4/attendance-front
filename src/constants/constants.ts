import { ISignUpItem } from '@/types/IAuth';

// 이메일 유효성 정규식
export const rEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 영문+숫자로 이루어진 8자리 이상, 16자리 이하 유효성 정규식
export const rPassword = /^(?=.[A-Za-z])(?=.\d).{8,16}$/;

export const SIGNUP_INPUT_INFO: ISignUpItem[] = [
  {
    label: '부서명',
    name: 'position',
    placeholder: '부서명을 선택하세요.',
    type: 'text'
  },
  {
    label: '이름',
    name: 'name',
    placeholder: '이름을 입력해주세요',
    type: 'text'
  },
  {
    label: '이메일',
    name: 'email',
    button: '중복확인',
    placeholder: '예: dangyeon@dangyeon.com',
    type: 'email'
  },
  {
    label: '비밀번호',
    name: 'password',
    placeholder: '영문+숫자로 이루어진 8자리 이상, 16자리 이하',
    type: 'password'
  },
  {
    label: '비밀번호 확인',
    name: 'checkedPwd',
    placeholder: '비밀번호를 한번 더 입력해주세요.',
    type: 'password'
  },
  {
    label: '휴대폰 번호',
    name: 'phone',
    placeholder: '010-1234-5678',
    type: 'tel'
  },
  {
    label: '입사일',
    name: 'hireDate',
    placeholder: '날짜를 선택해주세요.',
    type: 'date'
  },
  {
    label: '프로필 사진',
    name: 'profileUrl',
    button: '업로드',
    placeholder: '선택된 이미지 없음.',
    type: 'file'
  }
];
