import React, { useState, useEffect } from 'react';
import { SideBarIProps, FilterIProps } from '@/types/IAdmin';
import axios from 'axios';
import { ManageResIProps } from '@/types/IAdmin';
import Pagination from '@/components/common/Pagination';
import { PaginationIProps } from '@/types/ICommon';

export default function EmployeeList({
  isSidebarOpen,
  selectedDepartment,
  selectedPosition,
  searchValue,
  currentPage,
  pageCount,
  onPageChange
}: SideBarIProps & FilterIProps & PaginationIProps) {
  const [employees, setEmployees] = useState<ManageResIProps[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<ManageResIProps[]>(
    []
  );
  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = filteredEmployees.slice(startIndex, endIndex);

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

      if (searchValue !== '') {
        newFilteredEmployees = newFilteredEmployees.filter(employee =>
          employee.name.includes(searchValue.trim())
        );
      }

      setFilteredEmployees(newFilteredEmployees);
    };
    filterEmployees();
  }, [selectedDepartment, selectedPosition, searchValue, employees]);

  const handlePageChange = (newPage: number) => {
    onPageChange(newPage);
  };

  return (
    <>
      {currentPageData.map(employee => (
        <div
          key={employee.employeeId}
          className="flex justify-between border-solid border-b-[1px] h-[50px] items-center">
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
      <div className="flex items-end justify-center mt-[2rem]  ">
        <Pagination
          pageCount={Math.ceil(filteredEmployees.length / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
