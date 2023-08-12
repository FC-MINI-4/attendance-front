import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IManageProps } from '@/types/IAdmin';
import { Cookies } from 'react-cookie';

const cookie = new Cookies();
const accessToken = cookie.get('accessToken');

export default async function reqManage(): Promise<IManageProps> {
  try {
    const response = await axios.get<IManageProps>(
      `${clientInstance.defaults.baseURL}/api/admin/employees`,
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
// 관리페이지
