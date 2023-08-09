export interface ISignInRequestBody {
  email?: string;
  password?: string;
  accessToken?: string;
}

export interface ISignInUser {
  accessToken: string;
  refreshToken: string;
  accessTokenExpireDate: number;
}
