import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { ApplyIDuty } from '@/types/IDuty';

export default async function requestDayOff(requestData: ApplyIDuty) {
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