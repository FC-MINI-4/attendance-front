import axios from 'axios';
import { Cookies } from 'react-cookie';
import { clientInstance } from '@/api/axios';
import { ISignInRequestBody } from '@/types/ISignIn';

const cookie = new Cookies();
const accessToken = cookie.get('accessToken');

// * [POST] 비밀번호 변경을 위한 이메일 전송
export async function requestFindPw(findPwData: ISignInRequestBody) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/users/password/find`,
      findPwData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return response;
  } catch (error) {
    console.error('INVALID_EMAIL', error);
    throw error;
  }
}
