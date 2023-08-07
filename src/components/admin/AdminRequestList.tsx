import axios from 'axios';
import React, { useState, useEffect, useCallback } from 'react';
import Pagination from '@/components/common/Pagination';
import {
  selectedStartDateState,
  selectedEndDateState
} from '@/recoil/common/datePicker';
import { IPaginationProps } from '@/types/ICommon';
import { useRecoilState } from 'recoil';
import {
  ISideBarProps,
  IFilterProps,
  IMainProps,
  ILeaveResProps,
  IDutyResProps
} from '@/types/IAdmin';
import { adminState } from '@/recoil/common/modal';
import AdminModal from '@/components/admin/AdminModal';

export default function RequestList({
  searchValue,
  selectedDepartment,
  selectedPosition,
  selectedDuty,
  selectedRest,
  selectedStatus,
  currentPage,
  onPageChange,
  page
}: ISideBarProps & IFilterProps & IMainProps & IPaginationProps) {
  const [employees, setEmployees] = useState<
    (ILeaveResProps | IDutyResProps)[]
  >([]);
  const [filteredEmployees, setFilteredEmployees] = useState<
    (ILeaveResProps | IDutyResProps)[]
  >([]);
  const [selectedEmployeeReason, setSelectedEmployeeReason] = useState('');
  const [isAdminShow, setIsAdminShow] = useRecoilState(adminState);
  const itemsPerPage = 10;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [selectedStartDate] = useRecoilState(selectedStartDateState);
  const [selectedEndDate, setSelectedEndDate] =
    useRecoilState(selectedEndDateState);
  const currentPageData = filteredEmployees.slice(startIndex, endIndex);

  const handlePageChange = useCallback(
    (newPage: number) => {
      onPageChange(newPage);
    },
    [onPageChange]
  );

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        if (page === 'admin-leave') {
          const responseLeave = await axios.get('/api/admin/RestRequest');
          const responseDataLeave = responseLeave.data;
          const leaveEmployees = responseDataLeave.data?.employees || [];
          setEmployees(leaveEmployees);
        } else if (page === 'admin-duty') {
          const responseDuty = await axios.get('/api/admin/DutyRequest');
          const responseDataDuty = responseDuty.data;
          const dutyEmployees = responseDataDuty.data?.employees || [];
          setEmployees(dutyEmployees);
        }
      } catch (error) {}
    };
    fetchEmployees();
  }, [page]);

  useEffect(() => {
    const filterEmployees = () => {
      let newFilteredEmployees = employees;

      if (selectedStartDate && selectedEndDate) {
        const nextDay = new Date(selectedStartDate);
        nextDay.setDate(selectedStartDate.getDate() - 1);

        newFilteredEmployees = newFilteredEmployees.filter(employee => {
          if (page === 'admin-leave') {
            const startDate = (employee as ILeaveResProps).startDate
              ? new Date((employee as ILeaveResProps).startDate)
              : null;
            const endDate = (employee as ILeaveResProps).endDate
              ? new Date((employee as ILeaveResProps).endDate)
              : null;

            return (
              startDate &&
              endDate &&
              nextDay <= startDate &&
              startDate <= selectedEndDate &&
              nextDay <= endDate &&
              endDate <= selectedEndDate
            );
          } else {
            const date = (employee as IDutyResProps).date
              ? new Date((employee as IDutyResProps).date)
              : null;

            return date && nextDay <= date && date <= selectedEndDate;
          }
        });
      }

      if (selectedDepartment !== '계열사') {
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
      const totalPages = Math.ceil(newFilteredEmployees.length / itemsPerPage);
      if (currentPage >= totalPages) {
        onPageChange(totalPages > 0 ? 0 : 0);
      }
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
    page,
    selectedStartDate,
    selectedEndDate,
    onPageChange,
    currentPage
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
      {isAdminShow && <AdminModal reason={selectedEmployeeReason} />}
      {currentPageData.map(employee => (
        <div
          key={employee.employeeId}
          className={`flex border-solid border-b-[1px] justify-between h-[45px] items-center `}>
          <div className="w-[8rem] text-center font-semibold">
            {employee.type}
          </div>
          <div className="w-[12rem] text-center">{employee.name}</div>
          <div className="w-[8.5rem]  text-center">{employee.department}</div>
          <div className="w-[7.5rem] text-center"> {employee.position}</div>
          <div className="text-center w-[13rem]">{employee.hireDate}</div>

          {page === 'admin-duty' && 'date' in employee ? (
            <div className="w-[18rem] justify-center flex pr-4 text-center">
              {employee.date}
            </div>
          ) : 'startDate' in employee && 'endDate' in employee ? (
            <button
              onClick={() => {
                setSelectedEmployeeReason(employee.reason);
                setIsAdminShow(true);
              }}
              className="w-[18rem] justify-center flex hover:underline text-secondaryGray text-center">
              {`${employee.startDate} ~ ${employee.endDate}`}
            </button>
          ) : null}

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
                  <div className="w-[4rem] h-[28px] text-white rounded-md item-center flex justify-center bg-mainBlue">
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
                  className="w-[4rem] border-solid border-2 rounded-md mr-1 border-mainBlue text-mainBlue">
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
      <div className="flex items-end justify-center ">
        <Pagination
          pageCount={Math.ceil(filteredEmployees.length / itemsPerPage)}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
