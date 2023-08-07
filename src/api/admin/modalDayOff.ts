import axios from 'axios';
import { adminInstance } from '@/api/axios';
import { IDayOffDetailProps } from '@/types/IAdmin';

export default async function detailDayOff(
  employeeId: number
): Promise<IDayOffDetailProps> {
  try {
    const response = await axios.get<IDayOffDetailProps>(
      `${adminInstance.defaults.baseURL}/api/admin/employees/${employeeId}/day-offs`
    );
    return response.data;
  } catch (error) {
    console.error('DETAILDAYOFF_FAILURE', error);
    throw error;
  }
}
//승인된 연차
