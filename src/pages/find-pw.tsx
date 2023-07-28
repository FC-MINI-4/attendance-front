import AuthFindPwBox from '@/components/auth/AuthFindPwBox';

export default function changePw() {
  return (
    <div className="mx-auto sm:w-[580px] sm:my-[90px]">
      <div className="flex justify-center text-2xl sm:text-3xl bg-white sm:my-8">
        비밀번호 찾기
      </div>
      <AuthFindPwBox />
    </div>
  );
}
