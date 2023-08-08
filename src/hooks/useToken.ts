import { useCookies } from 'react-cookie';

export const useAccessToken = () => {
  const [cookies] = useCookies(['accessToken']);
  const accessToken = cookies.accessToken || null;
  return accessToken;
};

export default useAccessToken;
