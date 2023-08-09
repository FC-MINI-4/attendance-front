import React, { useEffect, useState } from 'react';
import memberList from '@/api/member/memberList';

export default function MemberBoard() {
  const [dayOffRemains, setDayOffRemains] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await memberList();
      const dayOffRemainsValue = response.data?.dayOffRemains | 0;
      setDayOffRemains(dayOffRemainsValue);
    };

    fetchData();
  }, []);

  return (
    <div className="sm:w-60 sm:mb-4 flex justify-between">
      <div>
        <div className="font-bold mb-2">총 연차</div>
        <div className="text-center">15일</div>
      </div>
      <div>
        <div className="font-bold mb-2">사용일수</div>
        <div className="text-center">{15 - dayOffRemains}일</div>
      </div>
      <div>
        <div className="font-bold mb-2">잔여 연차</div>
        <div className="text-center">{dayOffRemains}일</div>
      </div>
    </div>
  );
}
