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
  pwd: string;
  checkedPwd: string;
}
