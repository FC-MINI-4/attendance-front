import Link from "next/link";
import {HiOutlineUserCircle} from 'react-icons/hi'


const dummyData = {
  "name": '문현수',
  "department": "개발",
  "position": "팀장", 
  "employeeId": "YSL-001",
  "hireDate": "2022-06-25",
  "profileUrl": 'https://www.googleapis.com/1',
}

const handleClick = () => {
  // 1. 로그아웃 API를 요청합니다.
  return
}

// 받아온 프로필URL을 Photo로 변환합니다.

export default function MemberInfo() {
  return (
    <div className="flex flex-col text-lg">
      <div>{dummyData.profileUrl.length > 0 ? dummyData.profileUrl : <HiOutlineUserCircle />}</div>
      <div className="text-2xl mt-10">{dummyData.name}님, 반갑습니다.</div>
      <button onClick={handleClick}><Link href={'/sign-in'}>로그아웃</Link></button>
    </div>
  )
}
