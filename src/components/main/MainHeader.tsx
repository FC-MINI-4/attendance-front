import Image from 'next/image';

export default function MainHeader() {
  const LogOut = () => {
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'employeeId=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'expires=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    location.replace('/sign-in');
  };
  //그냥 일단 데이터 없어서 하드코딩
  return (
    <div className="h-24 flex justify-between px-16">
      <div className="top-0 bottom-0 my-auto pl-7 text-3xl font-bold">
        <Image src="/logo.png" alt="logo" width={200} height={20} />
      </div>
      <div className="flex top-0 bottom-0 my-auto pr-7">
        <div className="w-12 h-12 rounded-full bg-mainGray mr-6"></div>
        <div className="relative">
          <div className="absolute top-0 left-0 font-bold">문현수님</div>
          <div className="pt-6">mhs0704123@naver.com</div>
          <div className="absolute top-0 right-0 text-primary font-bold">
            잔여연차:15
          </div>
        </div>
        <div
          className="ml-4 top-0 bottom-0 my-auto font-bold cursor-pointer"
          onClick={() => LogOut()}>
          로그아웃
        </div>
      </div>
    </div>
  );
}
