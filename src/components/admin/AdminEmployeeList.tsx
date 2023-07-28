import React from 'react';
import { SideBarIProps } from '@/types/IAdmin';

export const EmployeeList: React.FC<SideBarIProps> = ({ isSidebarOpen }) => {
  return (
    <div
      className={`flex  justify-between border-solid border-b-[1px] h-[42px] items-center`}>
      <div className="w-[10rem]  text-center">이창휘</div>
      <div className="w-[10rem]   text-center">인사팀</div>
      <div className="w-[10rem]   text-center">사원</div>
      <div className="text-center  w-[10rem] ">2023년 11월 27일</div>
      <div className="w-[10rem]  flex justify-center  ">
        <button className="w-[10rem]  text-center hover:underline  text-secondaryGray">
          모달버튼
        </button>
      </div>
      <div className="w-[10rem]  justify-center flex ">
        <button className="w-[10rem] text-center hover:underline  text-secondaryGray">
          모달버튼
        </button>
      </div>
      <div className="w-[10rem]  text-center">7일</div>
      <div className="w-[10rem] text-center">15일</div>
      <div className="w-[10rem] text-center">8일</div>
    </div>
  );
};
