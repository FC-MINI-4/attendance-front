import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IApplyDuty } from '@/types/IDuty';

export default async function requestDayOff(requestData: IApplyDuty) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/schedules/duty`,
      requestData
    );
    if(response.data.code === 'OVERLAPPED_DUTY_DATE'){
      alert('이미 신청한 날짜입니다.')
    }else if(response.data.code === 'PAST_DATE'){
      alert(`${response.data.message}`)
    }
    return console.log(response.data);
  } catch (error) {
    console.error('Request_Fail', error);
    throw error;
  }
}
