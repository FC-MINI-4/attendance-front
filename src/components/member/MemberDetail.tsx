import Link from 'next/link';
import { HiOutlineUserCircle } from 'react-icons/hi';
import React, { useState, useEffect } from 'react';
import memberModify from '@/api/member/memberModify';
import { IMemberModifyProps, IprivacyProps } from '@/types/IMyPages';
import { clientInstance } from '@/api/axios';
import Image from 'next/image';
import DropdownFilter from '@/components/admin/AdminDropDownFilter';
import { MODIFY_DEPARTMENT } from '@/constants/options';
import memberInfo from '@/api/member/memberInfo';

export default function MemberInfoEdit() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [privacyInfo, setPrivacyInfo] = useState<IprivacyProps>({
    success: false,
    code: '',
    message: '',
    data: {
      employeeId: 0,
      department: '',
      name: '',
      email: '',
      phone: '',
      hireDate: '',
      profilePath: '',
      position: ''
    }
  });

  useEffect(() => {
    async function getInfo() {
      const response = await memberInfo();
      if (response.success && response.data) {
        const data = response;
        setPrivacyInfo(data);
      }
    }

    getInfo();
  }, []);

  const hireDate = new Date(privacyInfo.data.hireDate);
  const currentDate = new Date();

  const dateDifference = currentDate.getTime() - hireDate.getTime();

  const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = Math.floor(dateDifference / millisecondsPerYear);
  const remainingMilliseconds = dateDifference - years * millisecondsPerYear;

  const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44;
  const months = Math.floor(remainingMilliseconds / millisecondsPerMonth);

  const List = {
    이름: privacyInfo.data.name,
    계열사: privacyInfo.data.department,
    고용일: privacyInfo.data.hireDate
  };

  const More = {
    직급: privacyInfo.data.position,
    사원번호: privacyInfo.data.employeeId,
    근무기간: `${years}년 ${months}개월`
  };

  return (
    <div className="w-[70rem] flex h-[35rem]">
      <div className="w-[40rem] border-primary   border-2 rounded shadow">
        <div className="relative  w-[15rem]  rounded-sm font-bold sm:text-2xl sm:pb-8 h-9 ">
          <div className="bg-primary absolute   top-0 left-0 w-4 h-12 z-0"></div>
          <div className="relative z-10 pl-4 ml-2 pt-2">사용자 정보</div>
        </div>
        <div className="flex mt-8">
          <div className="">
            {Object.entries(List).map(([key, value]) => (
              <div className="m-6 ml-12" key={key}>
                <div className="text-md mt-14">{key}</div>
                <div className="w-[14rem] text-lg font-semibold border-b-2 border-gray-200 pt-2 outline-none rounded-sm focus:border-primary text-md">
                  {value}
                </div>
              </div>
            ))}
          </div>
          <div className="">
            {Object.entries(More).map(([key, value]) => (
              <div className="m-6 ml-12" key={key}>
                <div className="text-md mt-14">{key}</div>
                <div className="w-[14rem] text-lg font-semibold border-b-2 border-gray-200 pt-2 outline-none rounded-sm focus:border-primary text-md">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-[25rem] border-2 rounded border-primary shadow ml-2 ">
        <div className="w-full h-full">
          <div className=" flex  justify-center h-[200px] rounded-full mt-20 ">
            {previewImage ? (
              <Image
                src={previewImage}
                alt="미리보기 이미지"
                width={320}
                height={320}
                className="rounded-xl w-[240px] h-[240px] "
              />
            ) : privacyInfo.data.profilePath ? (
              <Image
                src={`${clientInstance.defaults.baseURL}${privacyInfo.data.profilePath}`}
                width={320}
                height={320}
                alt="프로필 이미지"
                className="rounded-xl w-[240px] h-[240px] "
              />
            ) : (
              <div className="flex items-center justify-center font-semibold ">
                이미지 없음
              </div>
            )}
          </div>
          <div className="flex justify-center items-center mt-32 font-bold text-2xl">
            {privacyInfo.data.name}님, 반갑습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
