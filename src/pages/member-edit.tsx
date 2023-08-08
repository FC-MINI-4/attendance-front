import React from 'react'
import MemberHeader from '@/components/member/MemberHeader'
import MemberBoard from '@/components/member/MemberBoard'
import MemberSideBar from '@/components/member/MemberSideBar'
import MemberEdit from '@/components/member/MemberEdit'
import MemberInfoEdit from '@/components/member/MemberInfoEdit' 


export default function memberEdit() {
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

        <div className='mr-80 flex bg-gray-200 p-4 rounded'>
        <div className="mr-4 pr-4 w-[800px]">
            <MemberEdit />
            </div>
            
            <div>
                <MemberInfoEdit />
            </div>
          </div>
     </div>
    
    
    </>
  );
}