import React from 'react';
import MemberInfo from '@/components/member/MemberInfo';
import MemberBoard from '@/components/member/MemberBoard';
import MemberHeader from '@/components/member/MemberHeader';
import MemberDetail from '@/components/member/MemberDetail';
import MemberSideBar from '@/components/member/MemberSideBar';

export default function Member() {
  return (
    <>
      <MemberHeader />
      <div className='flex mx-24 my-24'>
        <div className='pb-10 mr-20'>
            <MemberBoard />
            <div className='mt-16'>
                <MemberSideBar />
                </div>
        </div>
        <div>

        </div>
        <div className="flex bg-gray-100 p-8 rounded ml-40">
          <div className="mr-8 pr-4 w-[600px]">
            <MemberDetail />
          </div>
          <div>
            <MemberInfo />
          </div>
        </div>
      </div>
    </>
  );
}