import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { RxHome } from 'react-icons/rx';
import { BiBuildings } from 'react-icons/bi';
import { GoPaperAirplane } from 'react-icons/go';

export default function SideBar() {
  const router = useRouter();
  return (
    <div className="w-[5rem] h-[48.25rem] bg-primary rounded-bl-2xl">
      <Link href="/admin-manage" as="/admin-manage">
        <button
          className={`text-white w-[5rem] h-[5rem] ${
            router.asPath === '/admin-manage'
              ? 'active bg-secondaryHover rounded-xl '
              : ''
          }`}>
          <div className="flex flex-col items-center">
            <RxHome className="w-[36px] h-[36px]" />
            <span>관리</span>
          </div>
        </button>
      </Link>

      <Link href="/admin-leave" as="/admin-leave">
        <button
          className={`text-white w-[5rem] h-[5rem] ${
            router.asPath === '/admin-leave'
              ? 'active bg-secondaryHover rounded-xl'
              : ''
          }`}>
          <div className="flex flex-col items-center">
            <GoPaperAirplane className="w-[36px] h-[36px]" />
            <span>휴가</span>
          </div>
        </button>
      </Link>

      <Link href="/admin-duty" as="/admin-duty">
        <button
          className={`text-white w-[5rem] h-[5rem] ${
            router.asPath === '/admin-duty'
              ? 'active bg-secondaryHover rounded-xl'
              : ''
          }`}>
          <div className="flex flex-col items-center">
            <BiBuildings className="w-[36px] h-[36px]" />
            <span>당직</span>
          </div>
        </button>
      </Link>
    </div>
  );
}
