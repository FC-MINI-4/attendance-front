import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { signInState } from '@/recoil/signin';
import PwBox from '@/components/common/PwBox';
import Button from '@/components/common/Button';

import { requestSignIn } from '@/api/auth/signin';
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

      // 로그인 성공 시
      if (response.data.success) {
        // 성공 메시지 alert
        alert(response.data.message);
        // 액세스 토큰
        const accessToken = response.data.data.token.accessToken;
        // 사원 아이디
        const employeeId = response.data.employeeId;
        // 현재 시간 + 만료 시간 = 만료일
        const expireDate = new Date(
          Date.now() + response.data.data.token.accessTokenExpireDate
        );

        // 쿠키 생성
        document.cookie = `accessToken=${accessToken}; expires=${expireDate.toUTCString()}; employeeId=${employeeId} path=/;`;

        // main 페이지로 라우팅
        router.push('/main');
      }
      // 로그인 실패 시
      else {
        // 실패 메시지 alert
        alert(response.data.message);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <PwBox>
      <AuthSignInInput />
      <Button contents={'로그인'} />
      <div className="flex justify-between sm:mt-2 mb-12 sm:mb-0">
        <Link href="/sign-up" className="cusor-pointer">
          회원가입
        </Link>
        <Link href="/find-pw" className="cusor-pointer">
          비밀번호 찾기
        </Link>
      </div>
    </PwBox>
  );
}
3;
