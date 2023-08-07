import { useState } from "react";

const dummyData = {
  "department": "개발팀",
  "name" : "문현수",
   "email" : "1234@naver.com",
   "phone" : "010-1234-1234",
   "hireDate" : "2023-07-26"
}

const department = {
  "part1":"순양 자동차",
  "part2":"순양 증권",
  "part3":"순양 의료원",
  "part4":"순양 반도체",
  "part5":"순양 백화점",
  "part6":"순양 마이크로",
}

export default function MemberEdit() {
  //const [isClicked, setIsClicked] = useState<boolean>(false)

  return (
    <div className="bg-white rounded shadow w-full max-w-2xl p-8">
      <div dir="ltr">
      <div className="relative bg-gray-300 rounded-sm-lg font-bold sm:text-2xl sm:pb-8 h-7">
        <span className="bg-primary absolute top-0 left-0 w-4 h-8 z-0"></span>
        <span className="relative z-10 pl-4">사용자 정보</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:text-sm sm:pb-6 mt-8">
        <div className="mb-4 text-base flex items-center">
          <span className="whitespace-nowrap ">계열사 :</span>
          <select className="text-base w-full ml-2 border-b border-mainGray">
            <option value="순양 자동차">{department.part1}</option>
            <option value="순양 증권">{department.part2}</option>
            <option value="순양 의료원">{department.part3}</option>
            <option value="순양 반도체">{department.part4}</option>
            <option value="순양 백화점">{department.part5}</option>
            <option value="순양 마이크로">{department.part6}</option>
          </select>
        </div>
        <div></div>
        <div className="mb-4 text-base flex items-center">
          <span className="whitespace-nowrap mr-2">이름 :</span>
          <div className="border-b border-mainGray w-full">{dummyData.name}</div>
        </div>
        <div className="mb-4 text-base flex items-center">
          <span className="whitespace-nowrap mr-2">이메일 :</span>
          <div className="border-b border-mainGray w-full">{dummyData.email}</div>
        </div>
        <div className="mb-4 text-base flex items-center">
          <span className="whitespace-nowrap mr-2">전화번호 :</span>
          <input
            className="outline-none pl-2 font-bold focus:border-primary focus:text-primary w-full border-b border-mainGray"
            name="phone"
            placeholder={dummyData.phone}
          />
        </div>
        <div className="text-base flex items-center">
          <span className="whitespace-nowrap mr-2">입사일 :</span>
          <div className="border-b border-mainGray w-full">{dummyData.hireDate}</div>
        </div>
        <div className='text-lg my-2 text-center'>
          <button >취소</button>
        </div>

        <div className='text-lg my-2 text-center'>
        <button >저장</button>
        </div>
      </div>
    </div>
  );
}
