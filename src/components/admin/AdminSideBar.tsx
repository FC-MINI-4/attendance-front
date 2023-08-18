import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  HiOutlineUsers,
  HiOutlineHome,
  HiOutlineBuildingOffice2,
  HiOutlinePaperAirplane
} from 'react-icons/hi2';

const links = [
  { href: '/admin-manage', text: '관리', icon: HiOutlineHome },
  { href: '/admin-leave', text: '휴가', icon: HiOutlinePaperAirplane },
  { href: '/admin-duty', text: '당직', icon: HiOutlineBuildingOffice2 },
  { href: '/admin-modify', text: '수정', icon: HiOutlineUsers }
];

export default function SideBar() {
  const router = useRouter();
  return (
    <div className="w-[5rem] h-[48.25rem] bg-primary rounded-bl-2xl ">
      {links.map(link => (
        <Link key={link.href} href={link.href}>
          <button
            className={`text-white w-[5rem] h-[5rem] ${
              router.asPath === link.href ? 'active bg-primaryHover' : ''
            }`}>
            <div className="flex flex-col items-center">
              <link.icon className="w-[36px] h-[36px]" />
              <span>{link.text}</span>
            </div>
          </button>
        </Link>
      ))}
    </div>
  );
}
