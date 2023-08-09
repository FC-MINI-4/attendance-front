import React from 'react';
import MemberHeader from '@/components/member/MemberHeader';
import MemberBoard from '@/components/member/MemberBoard';
import MemberSideBar from '@/components/member/MemberSideBar';
import MemberEdit from '@/components/member/MemberEdit';
import MemberInfoEdit from '@/components/member/MemberInfoEdit';

export default function memberEdit() {
  return (
    <>
      <div className="w-screen h-screen relative">
        <MemberHeader />
        <div className="flex h-fit">
          <div className="w-1/6 h-[858px] absolute left-0 top-24">
            <div className="mt-40">
              <MemberBoard />
            </div>
            <div className="mt-16">
              <MemberSideBar />
            </div>
          </div>

          <div className="w-5/6 h-[858px] absolute top-24 right-0 bg-gray-200 p-4">
            <div className="w-7/12 left-0 right-0 top-0 bottom-0 m-auto flex justify-between mt-24">
              <div className="pr-4 w-[600px]">
                <MemberEdit />
              </div>
              <div>
                <MemberInfoEdit />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
