import React from 'react';
import MemberBoard from '@/components/member/MemberBoard';
import MemberHeader from '@/components/member/MemberHeader';
import MyPageList from '@/components/member/MyPageList';
import MemberSideBar from '@/components/member/MemberSideBar';

export default function memberList() {
  return (
    <>
      <MemberHeader />
      <div className="flex mx-24 my-24">
        <div className="pb-10 mr-20">
          <MemberBoard />
          <div className="mt-16">
            <MemberSideBar />
          </div>
        </div>
        
        <div className="w-[800px] h-[800px] mr-80 flex ml-40">
          <div className=' bg-gray-100 p-24 rounded '>
          <MyPageList />
          </div>
        </div>
        
      </div>
    </>
  );
}