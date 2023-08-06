import axios from 'axios';
import { clientInstance } from '@/api/axios';
import { ISigninRequestBody } from '@/types/ISignin';

export default async function requestSignin(signinData: ISigninRequestBody) {
  try {
    const response = await axios.post(
      `${clientInstance.defaults.baseURL}/api/auth/login`,
      signinData
    );
    return response;
  } catch (error) {
    console.error('LOGIN_FAILURE', error);
    throw error;
  }
}
