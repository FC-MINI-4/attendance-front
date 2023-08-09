export interface IAuthSignUpInput {
  label: string;
  name: string;
  button?: string;
  placeholder?: string;
  type: string;
}

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

export interface IAuthCheckPw {
  password: string;
  confirmPassword: string;
  authToken?: string;
}

export interface IAuthChangePw extends IAuthCheckPw {
  currentPassword: string;
}
