import axios from 'axios';
import { clientInstance } from '../axios';
import { ISignInRequestBody } from '@/types/ISignIn';

// * [POST] 이메일 중복체크
export async function requestEmailCheck(signUpData: ISignInRequestBody) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/validateEmail`,
      signUpData
    );
    return response;
  } catch (error) {
    console.error('NOT_AVAILABLE_EMAIL', error);
    throw error;
  }
}

export async function requestSignUp(signUpData: FormData) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/signup`,
      signUpData,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    );
    return response;
  } catch (error) {
    console.error('NOT_AVAILABLE_EMAIL', error);
    throw error;
  }
}
