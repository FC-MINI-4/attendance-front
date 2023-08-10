import Link from 'next/link';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useRef, useState } from 'react';
import Image from 'next/image';

const dummyData = {
  name: '문현수',
  department: '개발',
  position: '팀장',
  employeeId: 'YSL-001',
  hireDate: '2022-06-25'
};

const handleClick = () => {
  // 1. 로그아웃 API를 요청합니다.
  return;
};

// 받아온 프로필URL을 Photo로 변환합니다.

export default function MemberInfo() {
  const [myUrl, setMyUrl] = useState('');
  const imgRef = useRef<HTMLImageElement>(null);

  const readImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;

    const imageFile = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (e: ProgressEvent<FileReader>) => {
      if (!e || !e.target) return;
      if (typeof e.target.result !== 'string' || !imgRef.current) return;

      imgRef.current.src = e.target.result;
    });

    setMyUrl(URL.createObjectURL(imageFile));

    return reader.readAsDataURL(imageFile);
  };

  return (
    <div className="flex flex-col text-lg bg-white shadow">
      <div className="flex justfiy-center items-center relative pl-12 my-6 w-[250px]">
        <HiOutlineUserCircle className="items-centerw-40 h-40" />
      </div>
      <div className="text-lg my-6 text-center font-bold">
        {dummyData.name}님, 반갑습니다.
      </div>
      <div className="text-lg my-2 text-center">
        <button onClick={handleClick} className="text-base">
          <Link href={'/sign-in'}>로그아웃</Link>
        </button>
      </div>
    </div>
  );
}
