import AuthChangePwBox from '@/components/auth/AuthChangePwBox';

export default function fintPw() {
  return (
    <>
      <div className="mx-auto sm:w-[580px] sm:my-[90px]">
        <div className="flex justify-center text-2xl sm:text-3xl bg-white sm:my-8 my-4">
          회사 로고
        </div>
        <AuthChangePwBox />
      </div>
    </>
  );
}
