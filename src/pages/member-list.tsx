import React from 'react';
import MemberBoard from '@/components/member/MemberBoard';
import MemberHeader from '@/components/member/MemberHeader';
import MyPageList from '@/components/member/MyPageList';
import MemberSideBar from '@/components/member/MemberSideBar';

export default function memberList() {
  return (
    <>
      
      <div className="w-screen h-screen relative">
      <MemberHeader />
        <div className="flex h-fit">
        <div className='w-1/6 h-[858px] absolute left-0 top-24'>
        <div className='mt-40'> 
          <MemberBoard />
          </div>
          <div className="mt-16">
            <MemberSideBar />
          </div>
        </div>
        </div>
        <div className="w-5/6 h-[858px] absolute top-24 right-0 bg-gray-200 p-4">
        <div className="w-[800px] h-[800px] mr-80 flex ml-40">
          <div className=' bg-white p-24 rounded '>
          <MyPageList />
          </div>
        </div>
        </div>
      </div>
    </>
  );
}