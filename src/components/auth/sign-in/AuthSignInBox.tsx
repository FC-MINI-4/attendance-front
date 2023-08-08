import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { signInState } from '@/recoil/signIn';
import PwBox from '@/components/common/PwBox';
import Button from '@/components/common/Button';
import { requestSignIn } from '@/api/auth/signIn';
import { ISignInUser } from '@/types/ISignIn';
import AuthSignInInput from '@/components/auth/sign-in/AuthSignInInput';

export default function AuthSignInBox() {
  const router = useRouter();
  const signInInfo = useRecoilValue(signInState);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await requestSignIn({
        email: signInInfo.email,
        password: signInInfo.password
      });

      if (response.data.success) {
        alert(response.data.message);

        router.push('/main');
      } else {
        alert(response.data.message);

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
