import React from 'react';
import MemberBoard from '@/components/member/MemberBoard';
import MainHeader from '@/components/main/MainHeader';
import MemberDetail from '@/components/member/MemberDetail';
import MemberSideBar from '@/components/member/MemberSideBar';

export default function Member() {
  return (
    <>
      <div className=" w-full shadow-md">
        <MainHeader />
      </div>
      <div className="flex mx-24 my-24">
        <div className="pb-10 mr-20">
          <MemberBoard />
          <div className="mt-16">
            <MemberSideBar />
          </div>
        </div>
        <div className="">
          <MemberDetail />
        </div>
      </div>
    </>
  );
}
