import React, { useState } from 'react';
import { MainHeaderIProps } from '@/types/IAdmin';
import { CiMenuBurger } from 'react-icons/ci';

export default function MainHeader({ onToggleSidebar }: MainHeaderIProps) {
  const handleToggle = () => {
    onToggleSidebar();
  };

  return (
    <div className="h-[4rem] border-solid border-b-2 border-mainGray  flex items-center justify-between">
      <div className="flex">
        <button className="ml-5 mr-[1rem] " onClick={handleToggle}>
          <CiMenuBurger className="w-[36px] h-[36px]" />
        </button>
        <div className="flex items-center">회사로고</div>
      </div>
      <div className="flex">
        <div className="mr-[2rem]">관리자님, 환영합니다!</div>
        <button className="mr-[2rem]">로그아웃</button>
      </div>
    </div>
  );
}
