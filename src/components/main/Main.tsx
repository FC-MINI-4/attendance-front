import { Cookies } from 'react-cookie';
import DialogModal from '@/components/common/Dialog';
import Calendar from '@/components/main/MainCalendar';
import MainHeader from '@/components/main/MainHeader';
import SideMenu from '@/components/main/MainSideMenu';
import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import requestSchedules from '@/api/main/schedules';
import {
  dayOffState,
  dutiesState,
  emailState,
  nameState,
  remainDaysState
} from '@/recoil/main';

export default function Main() {
  const [remainDays, setRemainDays] = useRecoilState(remainDaysState);
  const [dayOffs, setDayOffs] = useRecoilState(dayOffState);
  const [duties, setDuties] = useRecoilState(dutiesState);
  const [userName, setUserName] = useRecoilState(nameState);
  const [userEmail, setUserEmail] = useRecoilState(emailState);
  const [renderModal, setRenderModal] = useState(true); // Diaglog Modal 렌더링 조건

  // 쿠키에 저장된 employeeId를 꺼내와서 employeeId 변수에 저장
  const cookie = new Cookies();
  const isEmployee = cookie.get('role');

  useEffect(() => {
    const schedules = async () => {
      if (isEmployee === 'USER') setRenderModal(false);
      try {
        const request = await requestSchedules();
        const scheduleInfo = request.data;
        setRemainDays(scheduleInfo.dayOffRemains);
        setDayOffs(scheduleInfo.dayOffs);
        setDuties(scheduleInfo.duites);
        setUserName(scheduleInfo.name);
        setUserEmail(scheduleInfo.email);
      } catch (error) {
        console.log(`error: ${error}`);
      }
    };
    schedules();
  }, [
    setDayOffs,
    setRemainDays,
    setDuties,
    setUserEmail,
    setUserName,
    isEmployee
  ]);

  return (
    <>
      {renderModal && <DialogModal message={'사원 로그인이 필요합니다.'} />}
      <div className="w-screen h-screen relative">
        <div className="absolute top-0 left-0 w-full shadow-md">
          <MainHeader />
        </div>
        <div className="w-11/12 absolute top-[7rem] left-0 right-0 mx-auto">
          <div className="absolute top-0 left-0 w-1/6 pt-10">
            <SideMenu />
          </div>
          <div className="absolute top-0 right-0 w-5/6">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  );
}
