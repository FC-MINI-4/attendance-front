import { useState } from 'react';

const dummyData = {
  department: '개발팀',
  name: '문현수',
  email: '1234@naver.com',
  phone: '010-1234-1234',
  hireDate: '2023-07-26'
};

const department = {
  part1: '순양 자동차',
  part2: '순양 증권',
  part3: '순양 의료원',
  part4: '순양 반도체',
  part5: '순양 백화점',
  part6: '순양 마이크로'
};

export default function MemberEdit() {
  //const [isClicked, setIsClicked] = useState<boolean>(false)

  return (
    <div className="bg-white rounded shadow w-full max-w-2xl p-16">
      <div dir="ltr">
        <div className="relative bg-gray-200 rounded-sm-lg font-bold sm:text-3xl sm:pb-8 h-10">
          <span className="bg-primary absolute top-0 left-0 w-4 h-10 z-0"></span>
          <span className="text-lg pl-6 pb-2">사용자 정보</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-x-16 gap-y-12 text-sm sm:pb-8 mt-14">
        <div className="text-base">
          <div className="font-semibold text-gray-500">계열사</div>
          <select className="text-base w-full mt-1.5 border-b border-mainGray">
            <option value="순양 자동차">{department.part1}</option>
            <option value="순양 증권">{department.part2}</option>
            <option value="순양 의료원">{department.part3}</option>
            <option value="순양 반도체">{department.part4}</option>
            <option value="순양 백화점">{department.part5}</option>
            <option value="순양 마이크로">{department.part6}</option>
          </select>
        </div>
        <div></div>
        <div className="text-base">
          <div className="font-semibold text-gray-500">이름</div>
          <input
            className="outline-none mt-1.5 font-bold focus:border-primary focus:text-primary w-full border-b border-mainGray"
            name="name"
            placeholder={dummyData.name}
          />
        </div>
        <div className="text-base">
          <div className="font-semibold text-gray-500">이메일</div>
          <div className="mt-1.5 border-b border-mainGray w-full">
            {dummyData.email}
          </div>
        </div>
        <div className="text-base">
          <div className="font-semibold text-gray-500">전화번호</div>
          <input
            className="outline-none mt-1.5 font-bold focus:border-primary focus:text-primary w-full border-b border-mainGray"
            name="phone"
            placeholder={dummyData.phone}
          />
        </div>
        <div className="text-base">
          <div className="font-semibold text-gray-500">입사일</div>
          <div className="mt-1.5 border-b border-mainGray w-full">
            {dummyData.hireDate}
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button className="text-lg my-1">취소</button>
        <button className="text-lg my-1">저장</button>
      </div>
    </div>
  );
}
