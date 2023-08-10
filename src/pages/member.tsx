import React from 'react';
import MemberInfo from '@/components/member/MemberInfo';
import MemberBoard from '@/components/member/MemberBoard';
import MemberHeader from '@/components/member/MemberHeader';
import MemberDetail from '@/components/member/MemberDetail';
import MemberSideBar from '@/components/member/MemberSideBar';

export default function Member() {
  return (
    <>
      <div className="w-screen h-screen relative">
        <MemberHeader />
        <div className="flex h-fit">
          <div className="w-1/6 h-[858px] absolute left-0 top-24">
            <div className="mt-20">

              <MemberBoard />
            </div>
            <div className="mt-16">
              <MemberSideBar />
            </div>
          </div>
          <div className="w-5/6 h-[858px] absolute top-24 right-0 bg-gray-200 p-4">
            <div className="w-7/12 left-0 right-0 top-0 bottom-0 m-auto flex justify-between mt-20">
              <div className="pr-4 w-[800px]">
                <MemberDetail />
              </div>
              <div></div>
              <MemberInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
