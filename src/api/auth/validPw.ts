import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IAuthValidPw } from '@/types/IAuth';
import { Cookies } from 'react-cookie';

const cookie = new Cookies();
const accessToken = cookie.get('accessToken');
const employeeId = cookie.get('employeeId');

// * [POST] 입력한 비밀번호가 DB와 일치하는지 검사를 위한 작업
export async function requestValidPw(passwordData: IAuthValidPw) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/users/${employeeId}/check-password`,
      passwordData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return response;
  } catch (error: any) {
    alert(error.response.data.message);
    location.replace('/');
    return error;
  }
}
