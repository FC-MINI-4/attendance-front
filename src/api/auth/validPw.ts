import axios from 'axios';
import { Cookies } from 'react-cookie';
import { clientInstance } from '@/api/axios';

const cookie = new Cookies();
const accessToken = cookie.get('accessToken');

// * [GET] 입력한 비밀번호가 DB와 일치하는지 검사를 위한 작업
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
