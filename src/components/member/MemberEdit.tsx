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
    <div>
      <div className="flex">
        <div className="text-lg mt-8">계열사 : </div>
        <select className="text-lg mt-8"> {dummyData.department}
          <option value="순양 자동차">{department.part1}</option>
          <option value="순양 증권">{department.part2}</option>
          <option value="순양 의료원">{department.part3}</option>
          <option value="순양 반도체">{department.part4}</option>
          <option value="순양 백화점">{department.part5}</option>
          <option value="순양 마이크로">{department.part6}</option>
        </select>
      </div>
      <div>
        <div className="text-lg mt-8">이름 : {dummyData.name}</div>
        <div className="text-lg mt-8">이메일 : {dummyData.email}</div>
        <div className="text-lg mt-8 flex items-center">
          <span className="mr-2 whitespace-nowrap">핸드폰 번호 : </span>
          <input
            className="outline-none border-b-2 pl-2 font-bold focus:border-primary focus:text-primary"
            name="phone"
            placeholder={dummyData.phone}/>
        </div>
        <div className="text-lg mt-8">입사일 : {dummyData.hireDate}</div>
      </div>
    </div>
  )
}