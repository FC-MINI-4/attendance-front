import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IDutyDetailProps } from '@/types/IAdmin';

export default async function detailDuty(
  employeeId: number
): Promise<IDutyDetailProps> {
  try {
    const response = await axios.get<IDutyDetailProps>(
      `${clientInstance.defaults.baseURL}/api/admin/employees/${employeeId}/duties`
    );
    return response.data;
  } catch (error) {
    console.error('DETAILDUTY_FAILURE', error);
    throw error;
  }
}
//승인된 당직
