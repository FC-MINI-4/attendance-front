import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IDutyProps } from '@/types/IAdmin';
import { Cookies } from 'react-cookie';

const cookie = new Cookies();
const accessToken = cookie.get('accessToken');

export default async function dutiesList(): Promise<IDutyProps> {
  try {
    const response = await axios.get<IDutyProps>(
      `${clientInstance.defaults.baseURL}/api/admin/duties`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    return response.data;
  } catch (error: any) {
    alert('잘못된 접근입니다.');
    location.replace('/');
    return error;
  }
}
//당직요청관리페이지
