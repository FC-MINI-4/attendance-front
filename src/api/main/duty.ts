import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IApplyDuty } from '@/types/IDuty';

export default async function requestDayOff(requestData: IApplyDuty) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/schedules/duty`,
      requestData
    );
    return response;
  } catch (error) {
    console.error('Request_Fail', error);
    throw error;
  }
}
