import Image from "next/image"
import { useCookies } from 'react-cookie'
import Router from "next/router"
import Link from "next/link";

export default function MainHeader(){
  // const [cookies, , removeCookie] = useCookies();

  // const removeAllCookies = () => {
  //   for (const cookieName in cookies) {
  //     removeCookie(cookieName);
  //   }
  //   alert('로그아웃되었습니다.');
  // }

  // const [cookies, setCookie, removeCookie] = useCookies();

  // const handleDeleteAllCookies = () => {
  //   // 모든 쿠키 값을 삭제
  //   Object.keys(cookies).forEach(cookieName => {
  //     removeCookie(cookieName);
  //   });

  //   console.log('All cookies deleted!');
  // };

  const deleteCookie = (name: string) => {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }

  const a = () => {
    deleteCookie('accessToken')
    // deleteCookie('expires')
    // deleteCookie('employeeId')
  }

  return(
    <div className="h-24 flex justify-between px-16">
      <div className="top-0 bottom-0 my-auto pl-7 text-3xl font-bold">
        <Image src="/logo.png" alt="logo" width={200} height={20} />
      </div>
      <div className="flex top-0 bottom-0 my-auto pr-7">
        <div className="w-12 h-12 rounded-full bg-mainGray mr-6">
          
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 font-bold">
            문현수님
          </div>
          <div className="pt-6">
            mhs0704123@naver.com
          </div>
          <div className="absolute top-0 right-0 text-primary font-bold">
            잔여연차:15
          </div>
        </div>
        <div className="ml-4 top-0 bottom-0 my-auto font-bold">
          <Link href='/sign-in'
            className="cursor-pointer"
            onClick={a}>
            로그아웃
          </Link>
        </div>
      </div>
    </div>
  )
}