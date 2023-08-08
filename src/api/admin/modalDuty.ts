import axios from 'axios';
import { adminInstance } from '@/api/axios';
import { IDutyDetailProps } from '@/types/IAdmin';

export default async function detailDuty(
  employeeId: number
): Promise<IDutyDetailProps> {
  try {
    const response = await axios.get<IDutyDetailProps>(
      `${adminInstance.defaults.baseURL}/api/admin/employees/${employeeId}/duties`
    );
    return response.data;
  } catch (error) {
    console.error('DETAILDUTY_FAILURE', error);
    throw error;
  }
}
//승인된 당직
