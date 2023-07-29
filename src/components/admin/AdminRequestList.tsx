import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {
  SideBarIProps,
  FilterIProps,
  MainIProps,
  LeaveResIProps
} from '@/types/IAdmin';

export const RequestList: React.FC<
  SideBarIProps & FilterIProps & MainIProps
> = ({
  isSidebarOpen,
  searchValue,
  selectedDepartment,
  selectedPosition,
  selectedDuty,
  selectedRest,
  selectedStatus,
  page
}) => {
  const [employees, setEmployees] = useState<LeaveResIProps[]>([]);
  const [status, setStatus] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState<LeaveResIProps[]>(
    []
  );
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('/api/RestRequest');
        const responseData = response.data;
        console.log('API 응답 데이터:', responseData);
        setEmployees(responseData.data?.employees || []);
      } catch (error) {
        console.error('API 호출 오류:', error);
      }
    };
    fetchEmployees();
  }, []);

  useEffect(() => {
    const filterEmployees = () => {
      let newFilteredEmployees = employees;

      if (selectedDepartment !== '부서명') {
        newFilteredEmployees = newFilteredEmployees.filter(
          employee => employee.department === selectedDepartment
        );
      }

      if (selectedPosition !== '직급') {
        newFilteredEmployees = newFilteredEmployees.filter(
          employee => employee.position === selectedPosition
        );
      }
      if (page === 'admin-leave' && selectedRest !== '요청') {
        newFilteredEmployees = newFilteredEmployees.filter(
          employee => employee.type === selectedRest
        );
      }

      if (page === 'admin-duty' && selectedDuty !== '요청') {
        newFilteredEmployees = newFilteredEmployees.filter(
          employee => employee.type === selectedDuty
        );
      }

      if (selectedStatus !== '상태') {
        newFilteredEmployees = newFilteredEmployees.filter(
          employee => employee.status === selectedStatus
        );
      }

      if (searchValue !== '') {
        newFilteredEmployees = newFilteredEmployees.filter(employee =>
          employee.name.includes(searchValue.trim())
        );
      }

      setFilteredEmployees(newFilteredEmployees);
    };
    filterEmployees();
  }, [
    selectedDepartment,
    selectedPosition,
    searchValue,
    selectedStatus,
    selectedDuty,
    selectedRest,
    employees,
    page
  ]);

  const handleApproval = () => {
    if (window.confirm('승인 후 수정불가능합니다. 승인하시겠습니까?')) {
      alert('수정되었습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };

  const handleRejection = () => {
    if (window.confirm('거절 후 수정불가능합니다. 거절하시겠습니까?')) {
      alert('거절되었습니다.');
    } else {
      alert('취소되었습니다.');
    }
  };

  return (
    <>
      {filteredEmployees.map(employee => (
        <div
          key={employee.employeeId}
          className={`flex border-solid border-b-[1px] justify-between h-[42px] items-center `}>
          {page === 'admin-duty' && (
            <div className="w-[8rem] text-center font-semibold">당직</div>
          )}
          {page === 'admin-leave' && (
            <div className="w-[8rem] text-center font-semibold">
              {employee.type}
            </div>
          )}
          <div className="w-[12rem] text-center">{employee.name}</div>
          <div className="w-[8.5rem]  text-center">{employee.department}</div>
          <div className="w-[7.5rem] text-center"> {employee.position}</div>
          <div className="text-center w-[13rem]">{employee.hireDate}</div>
          <button className="w-[18rem] justify-center flex hover:underline  text-secondaryGray text-center">
            {`${employee.startDate} ~ ${employee.endDate}`}
          </button>

          <div className="w-[10rem] item-center flex justify-center">
            {(() => {
              if (employee.status === '대기중') {
                return (
                  <div className="w-[4rem] h-[28px] text-white rounded-md item-center flex justify-center bg-mainOrange">
                    {employee.status}
                  </div>
                );
              } else if (employee.status === '거절됨') {
                return (
                  <div className="w-[4rem] h-[28px] text-white rounded-md item-center flex justify-center bg-secondary">
                    {employee.status}
                  </div>
                );
              } else {
                return (
                  <div className="w-[4rem] h-[28px] text-white rounded-md item-center flex justify-center bg-primary">
                    {employee.status}
                  </div>
                );
              }
            })()}
          </div>

          <div className="w-[12rem] text-center">
            {employee.status === '대기중' && (
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
      ))}
    </>
  );
};
