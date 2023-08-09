const data = {
  name: '정준희',
  email: 'jeonggoo75@gmail.com',
  dayOffTotal: 15,
  dayOffUsed: 3,
  dayOffRemains: 12,
  dayOffs: [
    {
      dayOffId: 6,
      type: '연차',
      status: '승인',
      startDate: '2023-07-29',
      endDate: '2023-08-01',
      amount: 3,
      reason: '그냥 쉬고 싶어요.'
    },
    {
      dayOffId: 15,
      type: '오전반차',
      status: '거절',
      startDate: '2023-08-28',
      endDate: '2023-08-28',
      amount: 0.5,
      reason: '늦잠자고 싶어요.'
    },
    {
      dayOffId: 15,
      type: '특별휴가',
      status: '승인대기',
      startDate: '2023-08-16',
      endDate: '2023-08-17',
      amount: 0,
      reason: '늦잠자고 싶어요.'
    }
  ],
  duties: [
    {
      dutyId: 5,
      status: '승인',
      date: '2023-08-09'
    },
    {
      dutyId: 6,
      status: '승인대기',
      date: '2023-08-10'
    }
  ]
};

const list = {
  total: data.dayOffTotal,
  used: data.dayOffUsed,
  remains: data.dayOffRemains
};

export default function MemberBoard() {
  return (
    <div className="sm:w-60 sm:mb-4 flex justify-between left-0 right-0 mx-auto">
      <div>
        <div className="font-bold mb-3">총 연차</div>
        <div className="text-center">{list.total}일</div>
      </div>
      <div>
        <div className="font-bold mb-3">사용일수</div>
        <div className="text-center">{list.used}일</div>
      </div>
      <div>
        <div className="font-bold mb-3">잔여 연차</div>
        <div className="text-center">{list.remains}일</div>
      </div>
    </div>
  );
}
