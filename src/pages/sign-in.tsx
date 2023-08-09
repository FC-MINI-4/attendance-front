import Image from 'next/image';
import { RecoilRoot } from 'recoil';
import AuthSignInBox from '@/components/auth/sign-in/AuthSignInBox';

export default function signin() {
  return (
    <RecoilRoot>
      <div className="flex flex-col h-screen mx-auto sm:w-[500px] justify-center">
        <div className="flex justify-center text-2xl sm:text-3xl bg-white sm:my-8 my-4">
          <Image src="/logo.png" alt="logo" width={250} height={20} />
        </div>
        <hr className="font-bold border-b border-gray-700 sm:mb-8 mb-16" />
        <AuthSignInBox />
      </div>
    </RecoilRoot>
  );
}
