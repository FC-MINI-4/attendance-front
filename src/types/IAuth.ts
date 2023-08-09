export interface IAuthSignUpInput {
  label: string;
  name: string;
  button?: string;
  placeholder?: string;
  type: string;
}

export interface IAuthSignUp {
  label: string;
  name: string;
  button?: string;
  placeholder?: string;
  type: string;
}

export interface IAuthResetPw {
  accessToken: string;
  password: string;
  confirmPassword: string;
}

export interface IAuthCheckPw {
  password: string;
  confirmPassword: string;
  authToken?: string;
}

export interface IAuthFindPw {
  email: string;
}

export interface IAuthValidPw {
  password: string;
}
