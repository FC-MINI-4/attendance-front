import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IModifyDetailProps } from '@/types/IAdmin';

export default async function modifyDetail(
  id: number
): Promise<IModifyDetailProps> {
  try {
    const response = await axios.get<IModifyDetailProps>(
      `${clientInstance.defaults.baseURL}/api/admin/employee/${id}`
    );
    return response.data;
  } catch (error) {
    console.error('MODIFYDETAIL_FAILURE', error);
    throw error;
  }
}
//수정페이지 직원상세정보보기
