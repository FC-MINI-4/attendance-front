export interface ISignUp {
  profileUrl: string;
  position: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  hireDate: string;
  [key: string]: string;
}

export interface ISignUpRequestBody {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  hireDate: string;
  department: string;
}

export interface IRegexCheck {
  valid?: boolean;
  name?: string;
}
