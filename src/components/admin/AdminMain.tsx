import React, { useState } from 'react';
import { MainIProps } from '@/types/IAdmin';
import MainHeader from './MainHeader';
import SideBar from './SideBar';

export default function Main({ page }: MainIProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prevIsSidebarOpen => !prevIsSidebarOpen);
  };

  return (
    <div className="w-[65rem] h-[50rem] bg-white mx-auto rounded-2xl ">
      <MainHeader onToggleSidebar={handleToggleSidebar} />
      <div className=" flex">
        {isSidebarOpen && <SideBar />}
        <div className="">
          <div className="w-[10rem] h-[2rem]  font-400 mb-[3rem] text-3xl flex ml-[2rem] mt-[2rem]">
            {page === 'admin-manage' && '관리'}
            {page === 'admin-leave' && '연차요청관리'}
            {page === 'admin-duty' && '당직요청관리'}
          </div>
          <div
            className={`flex border-solid border-b-2 justify-between ${
              isSidebarOpen ? 'w-[60rem]' : 'w-[65rem]'
            }`}>
            {(page === 'admin-duty' || page === 'admin-leave') && (
              <>
                <div className="ml-[2rem]">요청</div>
                <div className="">이름</div>
                <div className="">부서명</div>
                <div className="">직급</div>
                <div className="">입사일</div>
                <div className="">요청사항</div>
                <div className="">상태</div>
                <div className="mr-[3rem]">관리</div>
              </>
            )}

            {page === 'admin-manage' && (
              <>
                <div className="ml-[2rem]">이름</div>
                <div className="">부서명</div>
                <div className="">직급</div>
                <div className="">입사일</div>
                <div className="">당직내역</div>
                <div className="">총연차</div>
                <div className="">사용연차</div>
                <div className="mr-[4rem]">잔여연차</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
