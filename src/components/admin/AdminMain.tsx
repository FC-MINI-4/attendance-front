import React, { useState } from 'react';
import { MainIProps } from '@/types/IAdmin';
import MainHeader from './AdminMainHeader';
import SideBar from './AdminSideBar';
import { DropdownFilter } from './AdminDropDownFilter';
import { RequestList } from './AdminRequestList';
import { EmployeeList } from './AdminEmployeeList';
import {
  restRequest,
  dutyRequest,
  department,
  status,
  employeePosition
} from './AdminOption';

export default function Main({ page }: MainIProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

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
    <div className="w-[96rem] h-[52.25rem] bg-white mx-auto my-auto rounded-2xl ">
      <MainHeader onToggleSidebar={handleToggleSidebar} />
      <div className=" flex">
        {isSidebarOpen && <SideBar />}
        <div className="">
          <div className="w-[10rem] h-[2rem]  font-400 mb-[4rem] text-3xl flex ml-[3.5rem] mt-[2rem] font-semibold">
            {page === 'admin-manage' && '관리'}
            {page === 'admin-leave' && '연차요청관리'}
            {page === 'admin-duty' && '당직요청관리'}
          </div>
          {(page === 'admin-duty' || page === 'admin-leave') && (
            <div className="mb-[2rem] ml-[3rem] text-xl">
              2023년 6월 27일 ~ 2023년 7월 27일
            </div>
          )}
          <div className={`${isSidebarOpen ? '' : 'ml-[3rem]'}`}>
            <div
              className={`flex border-solid border-b-2 justify-between h-[3rem] items-center text-lg font-medium `}>
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

                  <div className="w-[16rem] flex justify-center ">
                    이름:
                    <input
                      className="w-[5rem] ml-2 border-solid border-2 border-gray-400 rounded-md text-center h-[1.8rem] "
                      type="text"
                      placeholder="사원검색"
                    />
                  </div>

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
                  <div className="text-center w-[11rem]">입사일</div>
                  <div className="w-[11rem] text-center">요청내역</div>
                  <DropdownFilter
                    options={status}
                    value={selectedStatus}
                    onChange={handlestatusChange}
                  />
                  <div className="w-[12rem]  text-center ">관리</div>
                </>
              )}

              {page === 'admin-manage' && (
                <>
                  <div className="w-[10rem] text-center">
                    이름:
                    <input
                      className="w-[5rem] ml-2 border-solid border-2 border-gray-400 rounded-md text-center h-[1.8rem] "
                      type="text"
                      placeholder="사원검색"
                    />
                  </div>
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
                  <div className="text-center w-[10rem]">입사일</div>
                  <div className="w-[10rem] text-center">당직내역</div>
                  <div className="w-[10rem] text-center">연차내역</div>
                  <div className="w-[10rem] text-center">총연차</div>
                  <div className="w-[10rem] text-center">사용연차</div>
                  <div className="w-[10rem]  text-center">잔여연차</div>
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
    </div>
  );
}
