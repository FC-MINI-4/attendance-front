import { useEffect, useState } from 'react';
import memberInfo from '@/api/member/memberInfo';
import { MEMBER_USER_INFO } from '@/constants/constants';

export default function MemberDetail() {
  const [userInfo, setUserInfo] = useState(MEMBER_USER_INFO);

  useEffect(() => {
    memberInfo().then(res => {
      try {
        setUserInfo(res.data);
      } catch (error) {}
    });
  }, []);

  return (
    <div className="items-center justify-center">
      <div className="w-full p-16 bg-white shadow">
        <div className="pb-20">
          <div className="relative bg-gray-200 rounded-sm-lg font-bold sm:text-3xl sm:pb-8 h-10">
            <span className="bg-primary absolute top-0 left-0 w-4 h-10"></span>
            <span className="text-lg pl-6 pb-2">사용자 정보</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-[32px]">
          {Object.entries(userInfo).map(([key, value]) => (
            <div key={key}>
              <div className="text-base pb-[8px] font-semibold text-gray-500">
                {key}
              </div>
              <div className="mb-[24px] pb-[8px] text-lg border-b border-gray[300] max-w-full">
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
