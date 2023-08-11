import React from 'react';

import MemberBoard from '@/components/member/MemberBoard';
import MemberSideBar from '@/components/member/MemberSideBar';
import MemberLayout from '@/components/member/MemberLayout';
import MemberInfoEdit from '@/components/member/MemberInfoEdit';
import { RecoilRoot } from 'recoil';

export default function memberEdit() {
  return (
    <RecoilRoot>
      <MemberLayout>
        <div className=" w-full shadow-md"></div>
        <div className="flex  my-24">
          <div className="pb-10 ">
            <MemberBoard />
            <div className="mt-16 ">
              <MemberSideBar />
            </div>
          </div>
          <div className="">
            <MemberInfoEdit />
          </div>
        </div>
      </MemberLayout>
    </RecoilRoot>
  );
}
