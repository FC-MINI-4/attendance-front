import { NextApiRequest, NextApiResponse } from 'next';
import { ILeaveProps } from '@/types/IAdmin';

const dummyEmployees = [
  {
    employeeId: 1,
    name: '이창휘',
    department: '순양자동차',
    position: '사원',
    hireDate: '2021-11-27',
    dayOffId: 1,
    requestDate: '2023-07-01',
    type: '연차',
    status: '거절됨',
    startDate: '2023-07-01',
    endDate: '2023-07-02',
    reason: '쉬고 싶어요.'
  },
  {
    employeeId: 2,
    name: '유희태',
    department: '순양마이크로',
    position: '부장',
    hireDate: '2022-01-27',
    dayOffId: 2,
    requestDate: '2023-07-09',
    type: '연차',
    status: '승인됨',
    startDate: '2023-06-21',
    endDate: '2023-07-02',
    reason: '놀고 싶어요.'
  },

  {
    employeeId: 3,
    name: '문현수',
    department: '순양백화점',
    position: '대리',
    hireDate: '2020-07-05',
    dayOffId: 3,
    requestDate: '2023-04-09',
    type: '연차',
    status: '대기중',
    startDate: '2023-06-30',
    endDate: '2023-07-02',
    reason: '놀고 싶어요.'
  },

  {
    employeeId: 4,
    name: '이가은',
    department: '순양의료원',
    position: '부장',
    hireDate: '2022-07-27',
    dayOffId: 4,
    requestDate: '2023-03-09',
    type: '반차',
    status: '대기중',
    startDate: '2023-03-20',
    endDate: '2023-03-22',
    reason: '집가고 싶어요.'
  },

  {
    employeeId: 5,
    name: '장진영',
    department: '순양증권',
    position: '차장',
    hireDate: '2017-05-25',
    dayOffId: 5,
    requestDate: '2023-03-09',
    type: '연차취소',
    status: '대기중',
    startDate: '2023-03-20',
    endDate: '2023-03-22',
    reason: '집가고 싶어요.'
  },

  {
    employeeId: 6,
    name: '정준희',
    department: '순양반도체',
    position: '차장',
    hireDate: '2004-04-23',
    dayOffId: 6,
    requestDate: '2023-02-09',
    type: '반차취소',
    status: '대기중',
    startDate: '2023-04-20',
    endDate: '2023-04-22',
    reason: '집가고 싶어요.'
  },
  {
    employeeId: 7,
    name: '선예은',
    department: '순양반도체',
    position: '과장',
    hireDate: '2007-03-07',
    dayOffId: 7,
    requestDate: '2022-01-09',
    type: '연차취소',
    status: '대기중',
    startDate: '2022-03-20',
    endDate: '2022-03-22',
    reason: '집가고 싶어요.'
  },
  {
    employeeId: 8,
    name: '아무나',
    department: '순양증권',
    position: '과장',
    hireDate: '2007-03-07',
    dayOffId: 8,
    requestDate: '2022-1-09',
    type: '연차취소',
    status: '대기중',
    startDate: '2022-03-20',
    endDate: '2022-03-22',
    reason: '집가고 싶어요.'
  },
  {
    employeeId: 9,
    name: '살려줘',
    department: '순양반도체',
    position: '과장',
    hireDate: '2007-03-07',
    dayOffId: 9,
    requestDate: '2022-01-09',
    type: '연차취소',
    status: '대기중',
    startDate: '2022-03-20',
    endDate: '2022-03-22',
    reason: '집가고 싶어요.'
  },
  {
    employeeId: 10,
    name: '도와줘',
    department: '순양의료원',
    position: '과장',
    hireDate: '2007-03-07',
    dayOffId: 10,
    requestDate: '2022-01-09',
    type: '연차취소',
    status: '대기중',
    startDate: '2022-03-20',
    endDate: '2022-03-22',
    reason: '집가고 싶어요.'
  },
  {
    employeeId: 11,
    name: '도와줘',
    department: '순양증권',
    position: '과장',
    hireDate: '2007-03-07',
    dayOffId: 11,
    requestDate: '2022-01-09',
    type: '연차취소',
    status: '대기중',
    startDate: '2022-03-20',
    endDate: '2022-03-22',
    reason: '집가고 싶어요.'
  },
  {
    employeeId: 12,
    name: '도와줘',
    department: '순양반도체',
    position: '과장',
    hireDate: '2007-03-07',
    dayOffId: 12,
    requestDate: '2022-01-09',
    type: '연차취소',
    status: '대기중',
    startDate: '2022-03-20',
    endDate: '2022-03-22',
    reason: '집가고 싶어요.'
  },
  {
    employeeId: 13,
    name: '도와줘',
    department: '순양의료원',
    position: '과장',
    hireDate: '2007-03-07',
    dayOffId: 13,
    requestDate: '2022-01-09',
    type: '연차취소',
    status: '대기중',
    startDate: '2022-03-20',
    endDate: '2022-03-22',
    reason: '집가고 싶어요.'
  },
  {
    employeeId: 14,
    name: '도와줘',
    department: '순양마이크로',
    position: '과장',
    hireDate: '2007-03-07',
    dayOffId: 14,
    requestDate: '2022-01-09',
    type: '연차취소',
    status: '대기중',
    startDate: '2022-03-20',
    endDate: '2022-03-22',
    reason: '집가고 싶어요.'
  },

  ...Array.from({ length: 92 }, (_, index) => ({
    employeeId: 15 + index,
    name: `사원${15 + index}`,
    department:
      index % 6 === 0
        ? '순양자동차'
        : index % 6 === 1
        ? '순양반도체'
        : index % 6 === 2
        ? '순양의료원'
        : index % 6 === 3
        ? '순양마이크로'
        : index % 6 === 4
        ? '순양백화점'
        : '순양증권',

    position:
      index % 5 === 0
        ? '과장'
        : index % 5 === 1
        ? '부장'
        : index % 5 === 2
        ? '대리'
        : index % 5 === 3
        ? '차장'
        : '사원',
    hireDate: `20${7 + index}-0${1 + (index % 9)}-0${1 + (index % 9)}`,
    dayOffId: 15 + index,
    requestDate: `2023-0${1 + (index % 9)}-0${1 + (index % 9)}`,
    type:
      index % 6 === 0
        ? '연차취소'
        : index % 6 === 1
        ? '특별휴가'
        : index % 6 === 2
        ? '특별휴가취소'
        : index % 6 === 3
        ? '연차'
        : index % 6 === 4
        ? '반차'
        : '반차취소',
    status: index % 3 === 0 ? '승인됨' : index % 3 === 1 ? '대기중' : '거절됨',
    startDate: `2023-07-${20 + (index % 10)}`,
    endDate: `2023-07-${22 + (index % 10)}`,
    reason: index % 2 === 0 ? '집가고 싶어요.' : '쉬고 싶어요.'
  }))
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ILeaveProps>
) {
  if (req.method === 'GET') {
    try {
      const resData: ILeaveProps = {
        success: true,
        code: 'SUCCESS',
        message: '성공했습니다.',
        data: {
          employees: dummyEmployees // 더미 직원 데이터를 응답 데이터로 설정
        }
      };

      res.status(200).json(resData);
    } catch (error) {
      // 요청 바디 오류
      res.status(400).json({
        success: false,
        code: 'PARSE_ERROR',
        message: '요청에 실패하였습니다.'
      });
    }
  } else {
    // POST 요청 외에 다른 요청은 허용x
    res.status(405).end();
  }
}