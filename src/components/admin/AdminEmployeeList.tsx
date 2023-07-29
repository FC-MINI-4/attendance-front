import React, { useState, useEffect } from 'react';
import { SideBarIProps } from '@/types/IAdmin';
import axios from 'axios';
import { EmployeeIProps } from '@/types/IAdmin';

export const EmployeeList: React.FC<
  SideBarIProps & { selectedDepartment: string; selectedPosition: string }
> = ({ isSidebarOpen, selectedDepartment, selectedPosition }) => {
  const [employees, setEmployees] = useState<EmployeeIProps[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<EmployeeIProps[]>(
    []
  );
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/AdminRequest');
        const responseData = response.data;
        console.log('API 응답 데이터:', responseData);
        setEmployees(responseData.data?.employees || []);
      } catch (error) {
        console.error('API 호출 오류:', error);
      }
    };
    fetchEmployees();
  }, []);

  return (
    <>
      {employees.map(employee => (
        <div
          key={employee.employeeId}
          className="flex justify-between border-solid border-b-[1px] h-[42px] items-center">
          <div className="w-[13.5rem] text-center">{employee.name}</div>
          <div className="w-[7rem] text-center">{employee.department}</div>
          <div className="w-[7rem] ml-2 mr-4 text-center">
            {employee.position}
          </div>
          <div className="text-center w-[10rem]">{employee.hireDate}</div>
          <div className="w-[10rem] flex justify-center">
            <button className="w-[10rem] text-center hover:underline text-secondaryGray">
              상세보기
            </button>
          </div>
          <div className="w-[10rem] justify-center flex">
            <button className="w-[10rem] text-center hover:underline text-secondaryGray">
              상세보기
            </button>
          </div>
          <div className="w-[10rem] text-center">{employee.dayOffTotal}일</div>
          <div className="w-[10rem] text-center">{employee.dayOffUsed}일</div>
          <div className="w-[10rem] text-center">
            {employee.dayOffRemains}일
          </div>
        </div>
      ))}
    </>
  );
};
