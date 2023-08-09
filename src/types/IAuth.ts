export interface IAuthSignUpInput {
  label: string;
  name: string;
  button?: string;
  placeholder?: string;
  type: string;
}

export interface ISignUpItem {
  label: string;
  name: string;
  button?: string;
  placeholder?: string;
  type: string;
}

export interface IAuthCheckPw {
  password: string;
  confirmPassword: string;
  authToken?: string;
}

// 로그인 시 비밀번호 변경
export interface IAuthChangePw {
  currentPassword: string;
  password: string;
  confirmPassword: string;
}

// 비 로그인 시 비밀번호 리셋
export interface IAuthResetPw {
  password: string;
  confirmPassword: string;
}
