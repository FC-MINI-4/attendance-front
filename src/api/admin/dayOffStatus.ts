import axios from 'axios';
import { adminInstance } from '@/api/axios';
import { IModifyProps, IDayOffReqProps } from '@/types/IAdmin';

export default async function dayOffRes(
  requestBody: IDayOffReqProps
): Promise<IModifyProps> {
  try {
    const response = await axios.put<IModifyProps>(
      `${adminInstance.defaults.baseURL}/api/admin/day-offs`,
      requestBody
    );
    return response.data;
  } catch (error) {
    console.error('DAYOFFRES_FAILURE', error);
    throw error;
  }
}
//연차승인요청
