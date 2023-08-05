import Link from 'next/link';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { useRef, useState } from 'react'

const dummyData = {
  name: '문현수',
  department: '개발',
  position: '팀장',
  employeeId: 'YSL-001',
  hireDate: '2022-06-25',
  profileUrl: 'https://i.ibb.co/R3SM6X1/image.jpg'
};

const handleClick = () => {
  // 1. 로그아웃 API를 요청합니다.
  return;
};


// 받아온 프로필URL을 Photo로 변환합니다.

export default function MemberInfo() {
  const [myUrl, setMyUrl] = useState('')
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
    
    setMyUrl(URL.createObjectURL(imageFile))

    return reader.readAsDataURL(imageFile);
  }

  return (
    <div className="flex flex-col text-lg">
      <div className='flex justfiy-center items-center relative'>
        {dummyData.profileUrl.length > 0 ? (
          <img className="w-40 h-40 rounded-full bg-contain" src={ dummyData.profileUrl } alt="image" ref={imgRef}/>
        ) : (
          <HiOutlineUserCircle className='w-40 h-40'/>
        )}
        <input
          type='file'
          id='modify'
          onChange={(e)=> readImage(e)}
          className='absolute w-0 h-0 p-0 overflow:hidden border-0'/>
        <label
          htmlFor='modify'
          className='cursor-pointer inline-block text-xs border absolute right-3 bottom-0 px-2 py-px'>수정</label>
      </div>
      <div className="text-2xl my-10 text-center">
        {dummyData.name}님, 반갑습니다.
      </div>
      <button onClick={handleClick}>
        <Link href={'/sign-in'}>로그아웃</Link>
      </button>
    </div>
  );
}
