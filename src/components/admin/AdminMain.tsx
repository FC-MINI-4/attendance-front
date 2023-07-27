import React, { useState } from 'react';
import { MainIProps } from '@/types/IAdmin';
import MainHeader from './MainHeader';
import SideBar from './SideBar';
import { DropdownFilter } from './DropDownFilter';
import { RequestList } from './RequestList';
import { EmployeeList } from './EmployeeList';

export default function Main({ page }: MainIProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const restRequest = [
    '요청',
    '연차',
    '연차취소',
    '반차',
    '반차취소',
    '특별휴가',
    '특별휴가취소'
  ];
  const dutyRequest = ['요청', '당직', '당직취소'];
  const department = ['부서명', '인사팀', '기획팀', '마케팅팀'];
  const status = ['상태', '대기중', '승인됨', '거절됨'];
  const employeePosition = ['직급', '부장', '과장', '대리', '주임', '사원'];

  const [selectedDepartment, setSelectedDepartment] = useState<string>('');
  const [selectedStatus, setSelectedStatus] = useState<string>('');
  const [selectedRest, setSelectedRest] = useState<string>('');
  const [selectedPosition, setSeletedPosition] = useState<string>('');
  const [selectedDuty, setSelectedDuty] = useState<string>('');

  const handleRestChange = (value: string) => {
    setSelectedRest(value);
  };

  const handleDutyChange = (value: string) => {
    setSelectedDuty(value);
  };

  const handleDepartmentChange = (value: string) => {
    setSelectedDepartment(value);
  };

  const handlestatusChange = (value: string) => {
    setSelectedStatus(value);
  };

  const handlePositionChange = (value: string) => {
    setSeletedPosition(value);
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prevIsSidebarOpen => !prevIsSidebarOpen);
  };

  return (
    <div className="w-[65rem] h-[50rem] bg-white mx-auto my-auto rounded-2xl ">
      <MainHeader onToggleSidebar={handleToggleSidebar} />
      <div className=" flex">
        {isSidebarOpen && <SideBar />}
        <div className="">
          <div className="w-[10rem] h-[2rem]  font-400 mb-[4rem] text-3xl flex ml-[2rem] mt-[2rem]">
            {page === 'admin-manage' && '관리'}
            {page === 'admin-leave' && '연차요청관리'}
            {page === 'admin-duty' && '당직요청관리'}
          </div>
          {(page === 'admin-duty' || page === 'admin-leave') && (
            <div className="mb-[2rem] ml-[2rem] text-xl">
              2023년 6월 27일 ~ 2023년 7월 27일
            </div>
          )}
          <div
            className={`flex border-solid border-b-2 justify-between h-[3rem] items-center text-lg font-medium ${
              isSidebarOpen ? 'w-[60rem]' : 'w-[65rem]'
            }`}>
            {(page === 'admin-duty' || page === 'admin-leave') && (
              <>
                {page === 'admin-duty' && (
                  <div className="">
                    <DropdownFilter
                      options={dutyRequest}
                      value={selectedDuty}
                      onChange={handleDutyChange}
                    />
                  </div>
                )}

                {page === 'admin-leave' && (
                  <div className="">
                    <DropdownFilter
                      options={restRequest}
                      value={selectedRest}
                      onChange={handleRestChange}
                    />
                  </div>
                )}

                <div className="w-[5rem] text-center">이름</div>

                <DropdownFilter
                  options={department}
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                />
                <DropdownFilter
                  options={employeePosition}
                  value={selectedPosition}
                  onChange={handlePositionChange}
                />
                <div className="text-center w-[9rem]">입사일</div>
                <div className="w-[9rem] text-center">요청내역</div>
                <DropdownFilter
                  options={status}
                  value={selectedStatus}
                  onChange={handlestatusChange}
                />
                <div className="w-[8rem] text-center ">관리</div>
              </>
            )}

            {page === 'admin-manage' && (
              <>
                <div className="w-[7rem] text-center">이름</div>
                <DropdownFilter
                  options={department}
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                />
                <DropdownFilter
                  options={employeePosition}
                  value={selectedPosition}
                  onChange={handlePositionChange}
                />
                <div className="text-center w-[9rem]">입사일</div>
                <div className="w-[7rem] text-center">당직내역</div>
                <div className="w-[7rem] text-center">연차내역</div>
                <div className="w-[5rem] text-center">총연차</div>
                <div className="w-[5rem] text-center">사용연차</div>
                <div className="w-[5rem] mr-8 text-center">잔여연차</div>
              </>
            )}
          </div>
          <div>
            {page === 'admin-duty' && (
              <RequestList isSidebarOpen={isSidebarOpen} />
            )}
            {page === 'admin-leave' && (
              <RequestList isSidebarOpen={isSidebarOpen} />
            )}
            {page === 'admin-manage' && (
              <EmployeeList isSidebarOpen={isSidebarOpen} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
