import Calendar from '@/components/main/MainCalendar';
import MainHeader from '@/components/main/MainHeader';
import SideMenu from '@/components/main/MainSideMenu';
import { modalState } from '@/recoil/common/modal';
import { useRecoilState } from 'recoil'
import { useState, useEffect } from 'react'
import requestSchedules from '@/api/main/schedules';

export default function Main(){
  const [isModalShow] = useRecoilState(modalState)
  const [remainDays, setRemainDays] = useState<number>()
  const [dayOffs, setDayOffs] = useState([])
  const [duites, setDuties] = useState([])

  useEffect(()=>{
    const schedules = async () => {
      const request = await requestSchedules()
      const scheduleInfo = request.data
      
      setRemainDays(scheduleInfo.daysOffRemains)
      setDayOffs(scheduleInfo.dayOffs)
      setDuties(scheduleInfo.duites)
    }
    schedules()
  },[])

    console.log(dayOffs)

  return(
  <>
    <div className='w-screen h-screen relative'>
      <div className='absolute top-0 left-0 w-full shadow-md'>
        <MainHeader/>
      </div>
      <div className='w-11/12 absolute top-[7rem] left-0 right-0 mx-auto'>
        <div className='absolute top-0 left-0 w-1/6 pt-10'>
          <SideMenu/>
        </div>
        <div className='absolute top-0 right-0 w-5/6'>
          <Calendar/>
        </div>
      </div>
    </div>
  </>
  )
}