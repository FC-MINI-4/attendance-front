import React from 'react';
import { SideBarIProps } from '@/types/IAdmin';

export const EmployeeList: React.FC<SideBarIProps> = ({ isSidebarOpen }) => {
  return (
    <div
      className={`flex  justify-between border-solid border-b-[1px] h-[42px] items-center  ${
        isSidebarOpen ? 'w-[60rem]' : 'w-[65rem] '
      }`}>
      <div className="w-[5rem] ml-4 text-center">이창휘</div>
      <div className="w-[7rem] ml-4  text-center">인사팀</div>
      <div className="w-[7rem]  text-center">사원</div>
      <div className="text-center  w-[9rem]">2023년 11월 27일</div>
      <div className="w-[7rem] flex justify-center  ">
        <button className="w-[4rem] text-center hover:underline  text-gray-500">
          모달버튼
        </button>
      </div>
      <div className="w-[7rem] justify-center flex ">
        <button className="w-[4rem] text-center hover:underline  text-gray-500">
          모달버튼
        </button>
      </div>
      <div className="w-[5rem] text-center">15일</div>
      <div className="w-[5rem] text-center">7일</div>
      <div className="w-[5rem] mr-8  text-center">8일</div>
    </div>
  );
};
