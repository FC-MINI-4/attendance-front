import Link from 'next/link';
import { HiOutlineUserCircle } from 'react-icons/hi';
import react, { useState, useEffect } from 'react';
import memberModify from '@/api/member/memberModify';
import { IMemberModifyProps, IprivacyProps } from '@/types/IMyPages';
import { clientInstance } from '@/api/axios';
import Image from 'next/image';
import DropdownFilter from '@/components/admin/AdminDropDownFilter';
import { MODIFY_DEPARTMENT } from '@/constants/options';
import Button from '@/components/common/Button';
import memberInfo from '@/api/member/memberInfo';

export default function MemberInfoEdit() {
  const [employeeId, setEmployeeId] = useState<number>();
  const [department, setDepartment] = useState<string>('');
  const [profileImage, setProfileImage] = useState<File>();
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [privacyInfo, setPrivacyInfo] = useState<IprivacyProps>({
    success: false,
    code: '',
    message: '',
    data: {
      employeeId: 0,
      department: '',
      position: '',
      name: '',
      email: '',
      phone: '',
      hireDate: '',
      profilePath: ''
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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if ((employeeId && department && name && phone) || profileImage) {
      try {
        const data = {
          employeeId: privacyInfo.data.employeeId,
          department: privacyInfo.data.department,
          name: privacyInfo.data.name,
          phone: privacyInfo.data.phone
        };

        const formData = new FormData();

        formData.append(
          'personalInfoRequest',
          new Blob([JSON.stringify(data)], { type: 'application/json' })
        );

        formData.append('profileImageFile', profileImage as File);

        const response = await memberModify(formData);

        alert(response.message);
      } catch (error) {
        alert('수정에 실패했습니다.');
      }
    } else {
      alert('수정에 실패했습니다.');
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const fileSizeInMB = file.size / (1024 * 1024);
    if (fileSizeInMB > 5) {
      alert('파일 크기가 5MB를 초과합니다. 5MB 이하의 파일을 선택해주세요.');
      return;
    }
    const reader = new FileReader();
    reader.onload = e => {
      setProfileImage(file);
      setPreviewImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleNameChange = (value: string) => {
    setPrivacyInfo(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        name: value
      }
    }));
  };

  const handlePhoneChange = (value: string) => {
    setPrivacyInfo(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        phone: value
      }
    }));
  };

  const handleDepartmentChange = (value: string) => {
    setPrivacyInfo(prevState => ({
      ...prevState,
      data: {
        ...prevState.data,
        department: value
      }
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-[70rem] flex h-[35rem]">
      <div className="w-[40rem] border-primary   border-2 rounded shadow">
        <div className="relative  w-[15rem]  rounded-sm font-bold sm:text-2xl sm:pb-8 h-9 ">
          <div className="bg-primary absolute   top-0 left-0 w-4 h-12 z-0"></div>
          <div className="relative z-10 pl-4 ml-2 pt-2">정보 수정</div>
        </div>
        <div className=" m-6 ml-16  ">
          <div className="text-md font-semibold mt-16 ">이름</div>
          <input
            value={privacyInfo.data.name}
            onChange={e => handleNameChange(e.target.value)}
            className="w-[20rem]  border-b-2 border-gray-200 pt-2 outline-none rounded-sm  focus:border-primary text-md"
          />
        </div>

        <div className=" m-6 mt-8 ml-16">
          <div className="text-md font-semibold ">계열사</div>
          <div className="font-small w-[21rem] pt-2 border-b-2 border-gray-200 text-md pl-[-2rem] flex ">
            <DropdownFilter
              options={MODIFY_DEPARTMENT}
              value={privacyInfo.data.department}
              onChange={handleDepartmentChange}
            />
          </div>
        </div>

        <div className=" m-6 mt-8 ml-16 ">
          <div className="text-md font-semibold ">입사일</div>
          <input
            defaultValue={privacyInfo.data.hireDate}
            className="  border-b-2 border-gray-200 pt-2  w-[20rem] focus:border-primary rounded-sm outline-none text-md"
          />
        </div>

        <div className=" m-6 mt-8 ml-16 ">
          <div className="text-md font-semibold ">이메일</div>
          <input
            defaultValue={privacyInfo.data.email}
            className=" border-b-2 border-gray-200 pt-2  w-[20rem] focus:border-primary rounded-sm outline-none text-md"
          />
        </div>
        <div className=" m-6 ml-16 mt-8  ">
          <div className="text-md font-semibold ">전화번호</div>
          <input
            value={privacyInfo.data.phone}
            className="  border-b-2 border-gray-200 pt-2 w-[20rem] focus:border-primary rounded-sm outline-none text-md"
            onChange={e => handlePhoneChange(e.target.value)}
          />
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
          <label
            htmlFor="imageUpload"
            className=" text-lg font-semibold hover:cursor-pointer justify-center flex  mt-16">
            이미지를 선택해주세요.
          </label>
          <input
            id="imageUpload"
            className="hidden"
            type="file"
            accept="image/jpeg, image/png, image/gif, image/svg+xml"
            name="file"
            onChange={handleImageChange}></input>
          <div className="w-[25rem] flex justify-center ">
            <div className="w-[16rem] mt-20">
              <Button contents="수정" submit />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
