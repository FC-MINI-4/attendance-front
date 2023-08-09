import axios from 'axios';
import { Cookies } from 'react-cookie';
import { clientInstance } from '@/api/axios';
import { IAuthChangePw, IAuthValidPw } from '@/types/IAuth';

const cookie = new Cookies();
const accessToken = cookie.get('accessToken');
const employeeId = cookie.get('employeeId');

// * [POST] 로그인 시 비밀번호 변경
export async function requestChangePw(changePwData: IAuthChangePw) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/users/password/change`,
      changePwData,
      employeeId
    );
    return response;
  } catch (error) {
    console.error('INVALID_PASSWORD', error);
    throw error;
  }
}

// * [GET] 현재 비밀번호 유효성 검증
export async function requestValidPw() {
  try {
    const response = await axios.get(
      `${clientInstance.defaults.baseURL}/api/auth/valid/password`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return response;
  } catch (error) {
    console.error('INVALID_PASSWORD', error);
    throw error;
  }
}
