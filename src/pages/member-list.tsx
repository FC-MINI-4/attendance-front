import React from 'react';
import MemberBoard from '@/components/member/MemberBoard';
import MemberHeader from '@/components/member/MemberHeader';
import MyPageList from '@/components/member/MyPageList';
import MemberSideBar from '@/components/member/MemberSideBar';

export default function memberList() {
  return (
    <>
      <MemberHeader />
      <div className="mx-24 mt-8 font-bold sm:text-4xl border-b-black border-b-4 sm:pb-1">
        마이페이지
      </div>
      <div className="flex mx-24 my-12 justify-between">
        <div className="flex">
          <div className="flex flex-col sm:mr-32">
            <MemberBoard />
            <MemberSideBar />
          </div>
          <div className='w-[96rem] h-[60rem]'>
          <MyPageList />
          </div>
          
        </div>
        
      </div>
    </>
  );
}
