import axios from 'axios';
import { adminInstance } from '@/api/axios';
import { IDutyProps } from '@/types/IAdmin';

export default async function dutiesList(): Promise<IDutyProps> {
  try {
    const response = await axios.get<IDutyProps>(
      `${adminInstance.defaults.baseURL}/api/admin/duties`
    );
    return response.data;
  } catch (error) {
    console.error('DUTY_FAILURE', error);
    throw error;
  }
}
//당직요청관리페이지
