import React, { useEffect, useState } from 'react';
import { IMemberDayOffProps, IMemberDutyProps } from '@/types/IMyPages';
import Loading from '@/components/common/Loading';
import memberList from '@/api/member/memberList';

export default function MyPageList() {
  const [dayOffEmployees, setDayOffEmployees] = useState<IMemberDayOffProps[]>(
    []
  );
  const [dutyEmployees, setDutyEmployees] = useState<IMemberDutyProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const response = await memberList();
      const resList = response.data || {};

      if (resList.duties) {
        setDutyEmployees(resList.duties);
      }
      if (resList.dayOffs) {
        setDayOffEmployees(resList.dayOffs);
      }
      {
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[64rem] h-[36.67rem]">
      <div className="relative bg-gray-200 w-1/6 rounded-sm-lg font-bold sm:text-2xl sm:pb-8 h-9">
        <span className="bg-primary absolute top-0 left-0 w-4 h-9 z-0"></span>
        <span className="relative z-10 pl-4 ml-2">연차 리스트</span>
      </div>
      <div className="flex justify-between border-y-2 border-solid mt-6 text-1.5xl font-semibold py-3 text-center">
        <div className="w-[13.33rem] ">요청</div>
        <div className="w-[16.67rem]">사용날짜</div>
        <div className="w-[16.67rem]">사유</div>
        <div className="w-[13.33rem]">처리결과</div>
      </div>
      <div className="w-[64rem] h-[11.67rem] overflow-y-auto ">
        {dayOffEmployees.map(dayoffs => (
          <div
            key={dayoffs.dayOffId}
            className="h-[3.33rem] flex justify-between border-b-2 border-solid text-1.5xl py-3 text-secondaryGray text-center ">
            <div className="w-[13.33rem]">
              {dayoffs.type}({dayoffs.amount}일)
            </div>
            <div className="w-[16.67rem]">{`${dayoffs.startDate} ~ ${dayoffs.endDate}`}</div>
            <div className="w-[16.67rem]">{dayoffs.reason}</div>
            <div className="w-[13.33rem]">{dayoffs.status}</div>
          </div>
        ))}
      </div>
      <div className="relative bg-gray-200 w-1/6 rounded-sm font-bold sm:text-2xl sm:pb-8 h-9 mt-10">
        <span className="bg-primary absolute top-0 left-0 w-4 h-9 z-0"></span>
        <span className="relative z-10 pl-4 ml-2">당직 리스트</span>
      </div>
      <div>
        <div className="flex justify-between border-y-2 border-solid mt-6 text-1.5xl font-semibold py-3 text-center">
          <div className="w-[13.33rem]">요청</div>
          <div className="w-[33.33rem]">사용날짜</div>
          <div className="w-[13.33rem]"> 처리결과</div>
        </div>

        <div className="w-[64rem] h-[11.67rem] overflow-y-auto">
          {dutyEmployees.map(duties => (
            <div
              key={duties.dutyId}
              className="flex justify-between border-b-2 border-solid text-1.5xl py-3 text-secondaryGray overflow-y-auto text-center">
              <div className="w-[13.33rem]">{duties.type}</div>
              <div className="w-[33.33rem]">{duties.date}</div>
              <div className="w-[13.33rem]">{duties.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
