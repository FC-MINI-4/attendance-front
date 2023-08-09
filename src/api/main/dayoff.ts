import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IApplyDayOff } from '@/types/IDayOff';

export default async function requestDayOff(requestData: IApplyDayOff) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/schedules/day-off`,
      requestData
    );
    return response;
    alert('신청이 완료되었습니다.');
  } catch (error) {
    console.error('Request_Fail', error);
    throw error;
  }
}
