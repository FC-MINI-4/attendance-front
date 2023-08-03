import AuthFindPwBox from '@/components/auth/AuthFindPwBox';
import Image from 'next/image';

export default function changePw() {
  return (
    <div className="mx-auto sm:w-[580px] sm:my-[90px]">
      <div className="flex justify-center text-2xl sm:text-4xl bg-white sm:my-8">
        <Image src="/logo.png" alt="logo" width={250} height={20} />
      </div>
      <AuthFindPwBox />
    </div>
  );
}
