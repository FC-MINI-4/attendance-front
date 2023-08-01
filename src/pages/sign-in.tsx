import AuthSignInBox from '@/components/auth/sign-in/AuthSignInBox';
import Image from 'next/image';

export default function signin() {
  return (
    <div className="mx-auto sm:w-[500px] sm:my-[90px]">
      <div className="flex justify-center text-2xl sm:text-3xl bg-white sm:my-8 my-4">
        <Image src="/logo.png" alt="logo" width={250} height={20} />
      </div>
      <AuthSignInBox />
    </div>
  );
}
