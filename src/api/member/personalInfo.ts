import { clientInstance } from '@/api/axios';
import axios from 'axios'
import getCookie from '@/components/common/GetCookie';
import { IPrivacyRes } from '@/types/IMain';

export default async function requestPersonal(): Promise<IPrivacyRes>  {

  const employeeId = Number(getCookie('employeeId'));
  const accessToken = getCookie('accessToken')

  try {
    const response = await axios.get<IPrivacyRes>(
      `${clientInstance.defaults.baseURL}/api/personal-info/${employeeId}`,
      // {
      //   headers: {
      //     Authorization: `Bearer ${accessToken}`
      //   }
      // }
    );
    return response.data;
  } catch (error) {
    console.error('Request_Fail', error);
    throw error;
  }
}