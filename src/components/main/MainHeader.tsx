import Image from "next/image"
import Link from "next/link"
import { useCookies } from 'react-cookie'
import { useState } from 'react'

export default function MainHeader(){
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const [cookies, , removeCookie] = useCookies();

  const removeAllCookies = () => {
    setIsClicked(true)
    for (const cookieName in cookies) {
      removeCookie(cookieName);
    }
    alert('로그아웃되었습니다.');
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
          <Link
            href="/sign-in"
            onClick={removeAllCookies}>
            로그아웃
          </Link>
        </div>
      </div>
    </div>
  )
}