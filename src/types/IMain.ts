export interface IPrivacyRes {
  success: boolean;
  code: string;
  message: string;
  data?: IPrivacy[];
}
export interface IPrivacy {
  employeeId: number;
  name: string;
  department: string;
  hireDate: string;
  phone: string;
  email: string; 
}