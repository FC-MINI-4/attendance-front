import Image from 'next/image';
import requestPersonal from '@/api/member/personalInfo';
import { useState, useEffect } from 'react'

export default function MainHeader() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [userProfile, setUserProfile] = useState('')

  const LogOut = () => {
    document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'employeeId=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = 'expires=; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    location.replace('/sign-in');
  };

  useEffect(()=>{
    const userInfo = async () => {
      const infoReq = await requestPersonal()
      const personalInfo = infoReq.data
      
      setUserEmail(personalInfo.email)
      setUserName(personalInfo.name)
      setUserProfile(personalInfo.profileImagePath)
    }
    userInfo()
  },[])

  return (
    <div className="h-24 flex justify-between px-16">
      <div className="top-0 bottom-0 my-auto pl-7 text-3xl font-bold">
        <Image src="/logo.png" alt="logo" width={200} height={20} />
      </div>
      <div className="flex top-0 bottom-0 my-auto pr-7">
        <div className="w-12 h-12 rounded-full border-2 mr-6 overflow-hidden flex justify-center items-center">
          <Image src={userProfile ? userProfile : '/logo.png'} alt='profileImg' width={48} height={48}/>
        </div>
        <div className="relative">
          <div className="absolute top-0 left-0 font-bold">{userName}</div>
          <div className="pt-6">{userEmail}</div>
          <div className="absolute top-0 right-0 text-primary font-bold">
            잔여연차:{}
          </div>
        </div>
        <div
          className="ml-4 top-0 bottom-0 my-auto font-bold cursor-pointer"
          onClick={() => LogOut()}>
          로그아웃
        </div>
      </div>
    </div>
  );
}
