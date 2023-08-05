import Link from 'next/link';
import PwBox from '@/components/common/PwBox';
import Button from '@/components/common/Button';
import AuthSignInInput from '@/components/auth/sign-in/AuthSignInInput';

export default function AuthSignInBox() {
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
