import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IApplyDayOff } from '@/types/IDayOff';
import getCookie from '@/components/common/GetCookie';

export default async function requestDayOff(requestData: IApplyDayOff) {

  const accessToken = getCookie('accessToken')

  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/schedules/day-off`,
      requestData,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      }
    );
    alert('신청이 완료되었습니다.');
    return response;
  } catch (error) {
    console.error('Request_Fail', error);
    throw error;
  }
}
