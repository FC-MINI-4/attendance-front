import React from 'react';
import { MainIProps } from '@/types/IAdmin';

export default function Main({ page }: MainIProps) {
  return (
    <div className="w-[65rem] h-[50rem] bg-white mx-auto rounded-2xl ">
      <div className="h-[4rem] border-solid border-b-2 flex items-center justify-between">
        <div className="flex">
          <button className="ml-4 mr-[1rem]">토글버튼</button>
          <div>회사로고</div>
        </div>
        <div className="flex">
          <div className="mr-[1rem]">관리자님, 환영합니다!</div>
          <button className="mr-4">로그아웃</button>
        </div>
      </div>
      <div className=" flex">
        <div className="w-[5rem] h-[46rem]  bg-primary rounded-bl-2xl ">
          사이드바자리 사이드바컴포넌트로 뺼예정
        </div>
        <div className="">
          <div className="w-[10rem] h-[2rem]  font-400 mb-[3rem] text-3xl flex ml-[2rem] mt-[2rem]">
            {page === 'admin-manage' && '관리'}
            {page === 'admin-leave' && '연차요청관리'}
            {page === 'admin-duty' && '당직요청관리'}
          </div>
          <div
            className=" ml-[2rem] flex border-solid border-b-2 
          ">
            <div className="mr-[4rem]">요청</div>
            <div className="mr-[4rem]">이름</div>
            <div className="mr-[4rem]">부서명</div>
            <div className="mr-[5rem]">근속기간</div>
            <div className="mr-[6rem]">요청 날짜</div>
            <div className="mr-[6rem]">요청 사유</div>
            <div className="mr-[5rem]">상태</div>
            <div className="">관리</div>
          </div>
        </div>
      </div>
    </div>
  );
}
