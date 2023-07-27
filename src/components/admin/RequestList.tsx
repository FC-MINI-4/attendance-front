import React, { useState } from 'react';
import { SideBarIProps } from '@/types/IAdmin';

export const RequestList: React.FC<SideBarIProps> = ({ isSidebarOpen }) => {
  const [status, setStatus] = useState('대기중');

  const handleApproval = () => {
    if (window.confirm('승인 후 수정불가능합니다. 승인하시겠습니까?')) {
      alert('수정되었습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };

  const handleRejection = () => {
    if (window.confirm('거절 후 수정불가능합니다. 거절하시겠습니까?')) {
      alert('거절되었습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <div
      className={`flex border-solid border-b-[1px] justify-between h-[42px] items-center  ${
        isSidebarOpen ? 'w-[60rem]' : 'w-[65rem]'
      }`}>
      <div className="w-[7rem] text-center">연차</div>
      <div className="w-[5rem] text-center">이창휘</div>
      <div className="w-[7rem] text-center">인사팀</div>
      <div className="w-[7rem] text-center">사원</div>
      <div className="text-center w-[9rem]">2021년 11월 27일</div>
      <button className="w-[9rem] justify-center flex hover:underline  text-gray-500 text-center">
        2023년 7월 2일
      </button>
      <div className="w-[7rem] flex justify-center">
        <div className="w-[56px] h-[28px] text-white bg-orange-500 rounded-md item-center flex justify-center">
          {status}
        </div>
      </div>
      <div className="w-[8rem] text-center">
        {status === '대기중' && (
          <>
            <button
              onClick={handleApproval}
              className="w-[3rem] border-solid border-2 rounded-md mr-1 border-blue-500 text-blue-500">
              승인
            </button>
            <button
              onClick={handleRejection}
              className="w-[3rem] border-solid border-2 rounded-md border-red-500 text-red-500">
              거절
            </button>
          </>
        )}
      </div>
    </div>
  );
};
