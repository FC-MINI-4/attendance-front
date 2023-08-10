import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IprivacyProps } from '@/types/IMyPages';
import { Cookies } from 'react-cookie';

const cookie = new Cookies();
const employeeId = cookie.get('employeeId');

export default async function memberInfo(): Promise<IprivacyProps> {
  try {
    const response = await axios.get<IprivacyProps>(
      `${clientInstance.defaults.baseURL}/api/personal-info/${employeeId}`
    );
    return response.data;
  } catch (error) {
    console.error('Info_FAILURE', error);
    throw error;
  }
}
