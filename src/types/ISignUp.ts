export interface ISignUp {
  profileUrl: string;
  position: string;
  name: string;
  email: string;
  password: string;
  checkedPwd: string;
  phone: string;
  hireDate: string;
}

export interface IRegexCheck {
  valid?: boolean;
  name?: string;
}
