export interface IAuthSignUpInput {
  label: string;
  name: string;
  button?: string;
  placeholder?: string;
  type: string;
}

export interface IAuthSignUp {
export interface IAuthSignUpItem {
  label: string;
  name: string;
  button?: string;
  placeholder?: string;
  type: string;
}

export interface IAuthValidPw {
  password?: string;
}

export interface IAuthResetPw {
  accessToken: string;
  password: string;
  confirmPassword: string;
}

export interface IAuthFindPw {
  email: string;
}

export interface IAuthValidPw {
  password: string;
}

export interface IAuthChangePw {
  id: number;
  currentPassword: string;
  password: string;
  confirmPassword: string;
}

export interface IAuthChangePw extends IAuthCheckPw {
  currentPassword: string;
}
