export interface IAuthSignUpInput {
  info: string;
  enLabel: string;
  button?: string;
  placeholder?: string;
}

export interface ISignUpItem {
  label: string;
  enLabel: string;
  button?: string;
  placeholder?: string;
}

export interface IAuthCheckPw {
  pwd?: string;
  checkedPwd?: string;
}
