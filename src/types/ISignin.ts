export interface ISigninRequestBody {
  email: string;
  password: string;
}

export interface ISigninUser {
  accessToken: string;
  refreshToken: string;
  accessTokenExpireDate: number;
}

export type ILocalUser = Omit<ISigninUser, 'userId'>;
