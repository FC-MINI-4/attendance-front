export interface ISignInRequestBody {
  email?: string;
  password?: string;
}

export interface ISignInUser {
  accessToken: string;
  refreshToken: string;
  accessTokenExpireDate: number;
}
