import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IManageProps } from '@/types/IAdmin';

export default async function reqManage(): Promise<IManageProps> {
  try {
    const response = await axios.get<IManageProps>(
      `${clientInstance.defaults.baseURL}/api/admin/employees`
    );
    return response.data;
  } catch (error) {
    console.error('MANAGE_FAILURE', error);
    throw error;
  }
}
// 관리페이지
