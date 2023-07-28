import AuthSignInBox from '@/components/auth/sign-in/AuthSignInBox';
export default function signin() {
  return (
    <div className="mx-auto sm:w-[500px] sm:my-[90px]">
      {' '}
      <div className="flex justify-center text-2xl sm:text-3xl bg-white sm:my-8 my-4">
        회사명
      </div>
      <AuthSignInBox />
    </div>
  );
}
