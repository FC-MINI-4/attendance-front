import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { ApplyIDayOff } from '@/types/IDayOff';

export default async function requestDayOff(requestData: ApplyIDayOff) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/schedules/day-off`,
      requestData,
    )
    ;
    return console.log(response.data);
  } catch (error) {
    console.error('Request_Fail', error);
    throw error;
  }
}