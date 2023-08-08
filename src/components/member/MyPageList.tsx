import React,{useEffect, useState} from 'react'
import axios from 'axios';
import {MypageLeaveResIProps,MyPageDutyResIProps} from '@/types/IMyPages'


export default function MyPageList() {
  const [dutyEmployees, setDutyEmployees] = useState<MyPageDutyResIProps[]>([]);
  const [restEmployees, setRestEmployees] = useState<MypageLeaveResIProps[]>([]);
  
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const [dutyResponse, restResponse] = await Promise.all([
          axios.get('/api/WorkList'),
          axios.get('/api/RestList')
        ]);

        setDutyEmployees(dutyResponse.data.data?.duties || []);
        setRestEmployees(restResponse.data.data?.dayOffs || []);
      } catch (error) {
        console.error('API 호출 오류:', error);
      }
    };

    fetchEmployees();
  }, []);


  return (
    <div className='w-[64rem] h-[36.67rem]'>
  
      <div className='relative bg-white w-1/6 rounded-sm-lg font-bold sm:text-2xl sm:pb-8 h-10'>
            <span className='bg-primary absolute top-0 left-0 w-4 h-10 z-0'></span>
            <span className="relative z-10 pl-4">연차 리스트</span>
          </div>

      <div className='flex justify-between border-y-2 border-solid mt-6 text-1.5xl font-semibold py-3 text-center'>
        <div className='w-[13.33rem] '>요청</div>
        <div className='w-[16.67rem]'>사용날짜</div>
        <div className='w-[16.67rem]'>사유</div>
        <div className='w-[13.33rem]'>처리결과</div>
      </div>
      <div className='w-[64rem] h-[11.67rem] overflow-y-auto '>
      {restEmployees.map((dayoffs) => (
  
        <div key={dayoffs.employeeId} className='h-[3.33rem] flex justify-between border-b-2 border-solid text-1.5xl py-3 text-secondaryGray text-center '>
          <div className='w-[13.33rem]'>{dayoffs.type}</div>
          <div className='w-[16.67rem]'>{`${dayoffs.startDate} ~ ${dayoffs.endDate}`}</div>
          <div className='w-[16.67rem]'>{dayoffs.reason}</div>
          <div className='w-[13.33rem]'>{dayoffs.status}</div>
        </div>
      ))}
    </div>
  

    <div className='relative bg-white w-1/6 rounded-sm font-bold sm:text-2xl sm:pb-8 h-10 mt-10'>
  <span className='bg-primary absolute top-0 left-0 w-4 h-10 z-0'></span>
  <span className="relative z-10 pl-4">당직 리스트</span>
</div>
    <div>
      <div className='flex justify-between border-y-2 border-solid mt-6 text-1.5xl font-semibold py-3 text-center'>
        <div className='w-[13.33rem]' >요청</div>
        <div className='w-[33.33rem]' >사용날짜</div>
        <div className='w-[13.33rem]' > 처리결과</div>
      </div>
      <div className='w-[64rem] h-[11.67rem] overflow-y-auto'>
      {dutyEmployees.map((duties) => (
        <div
          key={duties.employeeId}
          className='flex justify-between border-b-2 border-solid text-1.5xl py-3 text-secondaryGray overflow-y-auto text-center'
        >
          <div className='w-[13.33rem]' >{duties.type}</div>
          <div className='w-[33.33rem]' >{duties.date}</div>
          <div className='w-[13.33rem]' >{duties.status}</div>
        </div>
      ))}
    </div>
  </div>
    </div>
  )
  
}