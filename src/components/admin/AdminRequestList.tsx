import React, { useState } from 'react';
import { SideBarIProps } from '@/types/IAdmin';

export const RequestList: React.FC<SideBarIProps> = ({ isSidebarOpen }) => {
  const [status, setStatus] = useState('대기중');

  const handleApproval = () => {
    if (window.confirm('승인 후 수정불가능합니다. 승인하시겠습니까?')) {
      setStatus('승인됨');
      alert('수정되었습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };

  const handleRejection = () => {
    if (window.confirm('거절 후 수정불가능합니다. 거절하시겠습니까?')) {
      setStatus('거절됨');
      alert('거절되었습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <div
      className={`flex border-solid border-b-[1px] justify-between h-[42px] items-center `}>
      <div className="w-[8rem] text-center font-semibold">연차</div>
      <div className="w-[12rem] text-center">이창휘</div>
      <div className="w-[8.5rem] ml-4 text-center">인사팀</div>
      <div className="w-[8.5rem] text-center">사원</div>
      <div className="text-center w-[13rem]">2021년 11월 27일</div>
      <button className="w-[18rem] justify-center flex hover:underline  text-secondaryGray text-center">
        2023년 12월 24일 ~ 2023년 12월 25일
      </button>

      <div className="w-[10rem] item-center flex justify-center">
        <div
          className={`w-[4rem] h-[28px] text-white rounded-md item-center flex justify-center ${
            status === '대기중'
              ? 'bg-mainOrange'
              : status === '거절됨'
              ? 'bg-secondary'
              : 'bg-primary'
          }`}>
          {status}
        </div>
      </div>
      <div className="w-[12rem] text-center">
        {status === '대기중' && (
          <>
            <button
              onClick={handleApproval}
              className="w-[4rem] border-solid border-2 rounded-md mr-1 border-primary text-primary">
              승인
            </button>
            <button
              onClick={handleRejection}
              className="w-[4rem] border-solid border-2 rounded-md border-secondary text-secondary">
              거절
            </button>
          </>
        )}
      </div>
    </div>
  );
};
