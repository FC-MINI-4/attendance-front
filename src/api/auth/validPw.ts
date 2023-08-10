import axios from 'axios';
import { IAuthValidPw } from '@/types/IAuth';
import { clientInstance } from '@/api/axios';

// * [POST] 비밀번호 변경을 위한 이메일 전송
export async function requestValidPw(vaildPwData: IAuthValidPw) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/users/password/find`,
      vaildPwData
    );
    return response;
  } catch (error) {
    console.error('INVALID_PASSWORD', error);
    throw error;
  }
}
