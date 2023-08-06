import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { signinState } from '@/recoil/signin';
import requestSignin from '@/api/auth/signin';
import PwBox from '@/components/common/PwBox';
import Button from '@/components/common/Button';
import { ILocalUser, ISigninUser } from '@/types/ISignin';
import AuthSignInInput from '@/components/auth/sign-in/AuthSignInInput';

export default function AuthSignInBox() {
  const signinInfo = useRecoilValue(signinState);
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await requestSignin({
        email: signinInfo.email,
        password: signinInfo.password
      });
      if (response.status === 200) {
        const userData: ISigninUser = response.data.data;
        const localUserData: ILocalUser = {
          accessToken: userData.accessToken,
          refreshToken: userData.refreshToken,
          accessTokenExpireDate: userData.accessTokenExpireDate
        };
      }
    } catch (error) {}
  };

  return (
    <PwBox>
      <form onSubmit={handleLogin}>
        <AuthSignInInput />
        <Button contents={'로그인'} submit />
        <div className="flex justify-between sm:mt-2 mb-12 sm:mb-0">
          <Link href="/sign-up" className="cusor-pointer">
            회원가입
          </Link>
          <Link href="/find-pw" className="cusor-pointer">
            비밀번호 찾기
          </Link>
        </div>
      </form>
    </PwBox>
  );
}
