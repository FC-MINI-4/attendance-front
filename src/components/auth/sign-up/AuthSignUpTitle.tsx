import Image from 'next/image';

export default function AuthSignUpTitle() {
  return (
    <>
      <div className="flex justify-center text-2xl sm:text-3xl">
        <Image src="/logo.png" alt="logo" width={250} height={20} />
      </div>
      <div className="flex mt-[1rem] justify-end mr-1">
        * &nbsp;필수입력사항
      </div>
      <div className="mb-8">
        <hr className="font-bold border-b border-gray-700" />
      </div>
    </>
  );
}
