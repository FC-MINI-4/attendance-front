export interface IAuthSignUpInput {
  info: string;
  enLabel: string;
  button?: string;
  placeholder?: string;
  type: string;
}

export interface ISignUpItem {
  label: string;
  enLabel: string;
  button?: string;
  placeholder?: string;
  type: string;
}

export interface IAuthCheckPw {
  pwd?: string;
  checkedPwd?: string;
}
