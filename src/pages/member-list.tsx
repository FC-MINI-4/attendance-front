import React from 'react';
import MemberBoard from '@/components/member/MemberBoard';
import MyPageList from '@/components/member/MyPageList';
import MemberSideBar from '@/components/member/MemberSideBar';
import MemberLayout from '@/components/member/MemberLayout';
import { RecoilRoot } from 'recoil';

export default function memberList() {
  return (
    <RecoilRoot>
      <MemberLayout>
        <div className=" w-full shadow-md"></div>
        <div className="flex my-24">
          <div className="pb-10 ">
            <MemberBoard />
            <div className="mt-16 ">
              <MemberSideBar />
            </div>
          </div>
          <div className="">
            <MyPageList />
          </div>
        </div>
      </MemberLayout>
    </RecoilRoot>
  );
}
