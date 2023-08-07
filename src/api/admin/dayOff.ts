import axios from 'axios';
import { adminInstance } from '@/api/axios';
import { ILeaveProps } from '@/types/IAdmin';

export default async function dayOffList(): Promise<ILeaveProps> {
  try {
    const response = await axios.get<ILeaveProps>(
      `${adminInstance.defaults.baseURL}/api/admin/day-offs`
    );
    return response.data;
  } catch (error) {
    console.error('DAYOFF_FAILURE', error);
    throw error;
  }
}
//연차요청관리페이지
