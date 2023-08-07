import axios from 'axios';
import { adminInstance } from '@/api/axios';
import { IModifyProps, IDutyReqProps } from '@/types/IAdmin';

// 근무 상태 변경 요청 함수
export default async function dutyRes(
  requestBody: IDutyReqProps
): Promise<IModifyProps> {
  try {
    const response = await axios.put<IModifyProps>(
      `${adminInstance.defaults.baseURL}/api/admin/duties`,
      requestBody
    );
    return response.data;
  } catch (error) {
    console.error('DUTYRES_FAILURE', error);
    throw error;
  }
}
