import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IAuthCheckPw } from '@/types/IAuth';

// * [POST] 비밀번호 변경
export async function requestChangePw(changePwData: IAuthCheckPw) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/users/password/change`,
      changePwData
    );
    return response;
  } catch (error) {
    console.error('INVALID_PASSWORD', error);
    throw error;
  }
}
