import { HiOutlineUserCircle } from 'react-icons/hi';
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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

export default function MemberInfoEdit() {
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
    <div className="flex flex-col items-center text-lg bg-white rounded shadow p-6">
      <div className="flex justify-center items-center relative sm:pb-8">
        <HiOutlineUserCircle className="w-40 h-40" />

        <input
          type="file"
          id="modify"
          onChange={e => readImage(e)}
          className="absolute w-0 h-0 p-0 overflow-hidden border-0"
        />
        <label
          htmlFor="modify"
          className="cursor-pointer inline-block text-base absolute right-3 bottom-0 px-0 py-1 text-light-blue-500 border-transparent mt-6 font-semibold">
          프로필 사진 업로드
        </label>
      </div>

      <div className="bg-gray-200 h-24 flex items-center justify-center rounded-md mt-6 font-semibold"></div>
      <Link href={'/change-pw'}>비밀번호 수정하기</Link>
    </div>
  );
}
