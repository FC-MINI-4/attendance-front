import { clientInstance } from '@/api/axios';
import axios from 'axios'
import getCookie from '@/components/common/GetCookie';

export default async function requestPersonal() {
  const employeeId = Number(getCookie('employeeId'));
  try {
    const response = await axios.get(
      `${clientInstance.defaults.baseURL}/api/personal-info/${employeeId}`
    );
    return console.log(response.data);
  } catch (error) {
    console.error('Request_Fail', error);
    throw error;
  }
}