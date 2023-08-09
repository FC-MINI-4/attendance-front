import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { IMemberListProps } from '@/types/IMyPages';

export default async function memberList(
  employeeId: number
): Promise<IMemberListProps> {
  try {
    const response = await axios.get<IMemberListProps>(
      `${clientInstance.defaults.baseURL}/api/personal-info/schedules/${employeeId}`
    );
    return response.data;
  } catch (error) {
    console.error('DUTY_FAILURE', error);
    throw error;
  }
}
