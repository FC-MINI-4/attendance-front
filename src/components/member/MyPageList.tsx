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
    <div className='w-[96rem] h-[55rem]'>
   
      <div className='text-4xl'>연차 리스트</div>
      <div className='flex justify-between border-y-2 border-solid mt-10 text-2xl font-semibold py-4 text-center'>
        <div className='w-[20rem] '>요청</div>
        <div className='w-[25rem]'>사용날짜</div>
        <div className='w-[25rem]'>사유</div>
        <div className='w-[20rem]'>처리결과</div>
      </div>
      <div className='W-[96rem] h-[17.5rem] overflow-y-auto '>
      {restEmployees.map((dayoffs) => (
      
        <div key={dayoffs.employeeId} className='h-[5rem] flex justify-between border-b-2 border-solid text-2xl py-4 text-secondaryGray text-center '>
          <div className='w-[20rem] h-[10rem]'>{dayoffs.type}</div>
          <div className='w-[25rem] h-[10rem]'>{`${dayoffs.startDate} ~ ${dayoffs.endDate}`}</div>
          <div className='w-[25rem] h-[10rem]'>{dayoffs.reason}</div>
          <div className='w-[20rem]  h-[10rem]'>{dayoffs.status}</div>
        </div>
      ))}
    </div>

  

  
  <div className='text-4xl mt-[5rem]'>당직 리스트</div>
  <div>
    <div className='flex justify-between border-y-2 border-solid mt-10 text-2xl font-semibold py-4 text-center'>
      <div className='w-[20rem]' >요청</div>
      <div className='w-[50rem]' >사용날짜</div>
      <div className='w-[20rem]' > 처리결과</div>
    </div>
    <div className='W-[96rem] h-[17.5rem] overflow-y-auto'>
    {dutyEmployees.map((duties) => (
      <div
        key={duties.employeeId}
        className='flex justify-between border-b-2 border-solid text-2xl py-4 text-secondaryGray overflow-y-auto text-center'
      >
        <div className='w-[20rem]' >{duties.type}</div>
        <div className='w-[50rem]' >{duties.date}</div>
        <div className='w-[20rem]' >{duties.status}</div>
      </div>
    ))}
  </div>
</div>
    </div>
  )
}
