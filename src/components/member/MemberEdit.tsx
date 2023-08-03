import Input from "../common/Input";

const dummyData = {
  "department": "개발팀",
  "name" : "문현수",
   "email" : "1234@naver.com",
   "phone" : "010-1234-1234",
   "hireDate" : "2023-07-26"
}


export default function MemberEdit() {
    const onClick = () => {};
  return (
    <div>
      <div className='text-lg'>부서명 {dummyData.department}</div>
      <div className=" text-lg mt-8">이름{dummyData.name}</div>
      <div className="text-lg mt-8">이메일{dummyData.email}</div>
      <div className="text-lg mt-8" style={{ display: 'flex', alignItems: 'center' }}>
        <span style={{ marginRight: '8px', whiteSpace: 'nowrap' }}>핸드폰 번호</span>
        <Input name='email' onChange={onClick} placeholder={dummyData.phone} type="phone" /></div>
      <div className="text-lg mt-8">입사일{dummyData.hireDate}</div>
    </div>
  )
}