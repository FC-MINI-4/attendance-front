import axios from 'axios';
import { clientInstance } from '../axios';
import { ISignInRequestBody } from '@/types/ISignIn';
import { ISignUpRequestBody } from '@/types/ISignUp';

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

export async function requestSignUp(signUpData: ISignUpRequestBody) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/signup`,
      signUpData
    );
    return response;
  } catch (error) {
    console.error('NOT_AVAILABLE_EMAIL', error);
    throw error;
  }
}
