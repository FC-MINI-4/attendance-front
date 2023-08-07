import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { ISignInRequestBody } from '@/types/ISignIn';

// * [POST]로그인 요청
export async function requestSignIn(signinData: ISignInRequestBody) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/login`,
      signinData
    );
    return response;
  } catch (error) {
    console.error('LOGIN_FAILURE', error);
    throw error;
  }
}
