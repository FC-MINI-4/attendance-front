// new Date()로 받아오는 현재 날짜 데이터를
// toLocaleString() // 한국 시각데이터로 바꿉니다.
// 2023.8.1 오후 2:17:38

// 2023 8 1 - 2022 06 15 = 1년 1개월

// 현재 날짜와 시간 생성
const currentDate = new Date();

const dummyData = {
  name: '문현수',
  department: '개발',
  position: '팀장',
  employeeId: 'YSL-001',
  hireDate: '2022-06-25'
};

/////////////////////////

// 근속 기간을 계산합니다.
function calculateDuration(startDate: Date, endDate: Date) {
  let yearsDiff = endDate.getFullYear() - startDate.getFullYear();
  let monthsDiff = endDate.getMonth() - startDate.getMonth();

  // 만약 현재 월이 시작 월보다 작다면, 년도를 하나 줄여야 합니다.
  if (endDate.getMonth() < startDate.getMonth()) {
    yearsDiff--;
    monthsDiff = 12 - startDate.getMonth() + endDate.getMonth();
  }

  return yearsDiff + '년 ' + monthsDiff + '개월';
}

const duration = calculateDuration(new Date(dummyData.hireDate), currentDate);

/////////////////////////

/////////////////////////

// 검색 기준일 (2023.8.1 (화)) 형식 반환 함수
const formatSearchDate = (date: Date) => {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  const daysText = days[date.getDay()]; // 현재 요일 인덱스를 반환합니다.

  return (
    date.toLocaleString('ko-KR', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    }) +
    ' (' +
    daysText +
    ')'
  );
};

const searchDate = formatSearchDate(currentDate);

/////////////////////////

const memberDetail = {
  부서명: dummyData.department,
  직위: dummyData.position,
  사원번호: dummyData.employeeId,
  입사일: dummyData.hireDate,
  '근무 기간': duration,
  '검색 기준일': searchDate
};

export default function MemberDetail() {
  return (
    <div>
      {Object.entries(memberDetail).map(([key, value]) => (
        <>
          <div key={key} className="sm:text-sm sm:pb-2 text-subTextAndBorder">
            {key}
          </div>
          <div className="sm:mb-6 sm:min-w-[20rem] sm:pb-2 text-xl border-b border-mainGray">
            {value}
          </div>
        </>
      ))}
    </div>
  );
}
