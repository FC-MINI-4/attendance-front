import axios from 'axios';
import { clientInstance } from '../axios';
import { ISignInRequestBody } from '@/types/ISignIn';

// * [POST] 비밀번호 변경을 위한 이메일 전송
export async function requestFindPw(findPwData: ISignInRequestBody) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/users/password/find`,
      findPwData
    );
    return response;
  } catch (error) {
    console.error('INVALID_EMAIL', error);
    throw error;
  }
}
