
const data = {
    "name": "정준희",
    "email": "jeonggoo75@gmail.com",
		"dayOffTotal": 15,
		"dayOffUsed": 3, 
    "dayOffRemains": 12,
		"dayOffs": [
			{
		    "dayOffId": 6,
				"type": "연차",
		    "status": "승인",
		    "startDate": "2023-07-29",
		    "endDate": "2023-08-01",
		    "amount": 3,
				"reason": "그냥 쉬고 싶어요."
			},
			{
		    "dayOffId": 15,
				"type": "오전반차",
		    "status": "거절",
		    "startDate": "2023-08-28",
		    "endDate": "2023-08-28",
				"amount": 0.5,
				"reason": "늦잠자고 싶어요."
			},
			{
		    "dayOffId": 15,
				"type": "특별휴가",
		    "status": "승인대기",
		    "startDate": "2023-08-16",
		    "endDate": "2023-08-17",
				"amount": 0,
				"reason": "늦잠자고 싶어요."
			}
		],
		"duties": [
			{
				"dutyId": 5,
		    "status": "승인",
		    "date": "2023-08-09",
			},
			{
				"dutyId": 6,
		    "status": "승인대기",
		    "date": "2023-08-10",
			}
		]
	}

  const list = {
    total: data.dayOffTotal,
    used: data.dayOffUsed,
    remains: data.dayOffRemains
  }

export default function MemberBoard() {
  return (
    <div className="w-60 h-60 bg-mainGray flex flex-col justify-evenly">
        <div className="ml-8">총 연차: {list.total}</div>
        <div className="ml-8">사용일수: {list.used}</div>
        <div className="ml-8">잔여 연차: {list.remains}</div>
    </div>
  )
}
