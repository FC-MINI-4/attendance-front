import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IAuthResetPw } from '@/types/IAuth';

// * [POST] 비밀번호 변경 (비 로그인 시)
export async function requestChangePw(resetPwData: IAuthResetPw) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/users/password/reset`,
      resetPwData
    );
    return response;
  } catch (error) {
    console.error('INVALID_PASSWORD', error);
    throw error;
  }
}
