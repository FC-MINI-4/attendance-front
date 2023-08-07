import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DropdownFilter from '@/components/admin/AdminDropDownFilter';
import { MODIFY_DEPARTMENT, MODIFY_POSITION } from '@/constants/option';
import {
  IAdminModifyProps,
  IManageResProps,
  IModifyDetailProps
} from '@/types/IAdmin';
import reqManage from '@/api/admin/manage';
import modifyDetail from '@/api/admin/modifyDetail';

export default function AdminModify({
  profileImage,
  handleChangeFile,
  handleDepartmentChange,
  handlePositionChange
}: IAdminModifyProps) {
  const [modifyEmployees, setModifyEmployees] = useState<IManageResProps[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<IModifyDetailProps>({
    employeeId: 0,
    name: '진양철',
    department: '순양그룹',
    position: '회장',
    hireDate: '1999-10-01',
    email: 'jinyc@naver.com',
    phone: '010-1234-5678'
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await reqManage();
      setModifyEmployees(response.data || []);
    };
    fetchEmployees();
  }, []);

  const handleButtonClick = async (employee: IManageResProps) => {
    const response = await modifyDetail(employee.employeeId);
    setSelectedEmployee(response);
  };

  return (
    <div className="ml-[3rem] h-[37rem] w-[92rem] flex">
      <div className=" h-[37rem] w-[25rem] border-2  border-primaryHover overflow-auto border-soild rounded-xl">
        <div className="w-[25rem] h-[2.5rem] flex bg-primary sticky top-0 z-10 ">
          <div className="w-[5rem] border-r-2 border-white h-[2,5rem] "></div>
          <div className="w-[10rem] border-r-2 border-white h-[2.5rem] justify-center items-center flex text-white">
            사원ID
          </div>
          <div className="w-[10rem] h-[2.5rem] flex justify-center items-center text-white ">
            이름
          </div>
        </div>

        {modifyEmployees.map((employee, index) => (
          <button
            key={employee.employeeId}
            onClick={() => handleButtonClick(employee)}
            className="w-[25rem] h-[2.5rem] flex border-b-2 border-primaryHover mt-[0.2px]">
            <div className="w-[5rem] border-r-2 h-[2.5rem]  border-primaryHover justify-center items-center flex  ">
              {index + 1}
            </div>
            <div className="w-[10rem] border-r-2 border-primaryHover h-[2.5rem] justify-center items-center flex ">
              {employee.employeeId}
            </div>
            <div className="w-[10rem] h-[2.5rem] flex justify-center items-center ">
              {employee.name}
            </div>
          </button>
        ))}
      </div>

      <form className="flex">
        <div className="h-[30rem] w-[20rem] ml-[3rem]">
          <div className=" h-[20rem] w-[20rem]  border-2 border-primaryHover  border-soild rounded-xl flex items-center justify-center ">
            {profileImage ? (
              <Image
                className="h-[20rem] w-[20rem]  rounded-xl"
                src={profileImage}
                alt="이미지"
              />
            ) : (
              <Image src="" alt="이미지" />
            )}
            <div className="flex  items-center  justify-center  font-semibold"></div>
          </div>
          <div className="w-[20rem] h-[3rem] flex items-center justify-center">
            <label
              htmlFor="imageUpload"
              className=" text-lg font-semibold hover:cursor-pointer">
              이미지를 선택해주세요
            </label>
            <input
              // defaultValue={selectedEmployee.profileImagePath}
              id="imageUpload"
              className="hidden"
              type="file"
              onChange={handleChangeFile}
              accept="image/jpeg, image/png, image/gif, image/svg+xml"
            />
          </div>
        </div>

        <div className="ml-[3rem] h-[37rem] w-[30rem] border-2 border-primaryHover border-soild rounded-xl  ">
          <div>
            <div className=" m-6 ml-16 mt-4 ">
              <div className="text-md font-semibold ">이름</div>
              <input
                defaultValue={selectedEmployee.name}
                className="w-[20rem]  border-b-2 border-gray-200 pt-2 outline-none rounded-sm  focus:border-primary text-md"
              />
            </div>

            <div className=" m-6 mt-4 ml-16">
              <div className="text-md font-semibold ">계열사</div>
              <div className="font-small w-[21rem] pt-2 border-b-2 border-gray-200 text-md pl-[-2rem] flex ">
                <DropdownFilter
                  options={MODIFY_DEPARTMENT}
                  value={selectedEmployee.department}
                  onChange={handleDepartmentChange}
                />
              </div>
            </div>
          </div>
          <div className="  ml-16 mt-4 ">
            <div className="text-md font-semibold ">직급</div>
            <div className="font-small w-[21rem]  border-b-2 pt-2   border-gray-200 text-md ">
              <DropdownFilter
                options={MODIFY_POSITION}
                value={selectedEmployee.position}
                onChange={handlePositionChange}
              />
            </div>
          </div>
          <div className=" m-6 mt-4 ml-16 ">
            <div className="text-md font-semibold ">입사일</div>
            <input
              defaultValue={selectedEmployee.hireDate}
              className="  border-b-2 border-gray-200 pt-2  w-[20rem] focus:border-primary rounded-sm outline-none text-md"
            />
          </div>

          <div className=" m-6 mt-4 ml-16 ">
            <div className="text-md font-semibold ">이메일</div>
            <input
              defaultValue={selectedEmployee.email}
              className=" border-b-2 border-gray-200 pt-2  w-[20rem] focus:border-primary rounded-sm outline-none text-md"></input>
          </div>
          <div className=" m-6 ml-16 mt-4  ">
            <div className="text-md font-semibold ">전화번호</div>
            <input
              defaultValue={selectedEmployee.phone}
              className="  border-b-2 border-gray-200 pt-2 w-[20rem] focus:border-primary rounded-sm outline-none text-md"
            />
          </div>
          <div className="w-[30rem]  justify-center flex">
            <button className=" h-[3rem] w-[10rem] text-white   bg-primary rounded-3xl">
              수정
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
