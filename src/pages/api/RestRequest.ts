import { NextApiRequest, NextApiResponse } from 'next';
import { LeaveIProps } from '@/types/IAdmin';

const dummyEmployees = [
  {
    employeeId: 1,
    name: '이창휘',
    department: '개발팀',
    position: '사원',
    hireDate: '2021-11-27',
    dayOffId: 1,
    requestDate: '2023-07-01',
    type: '연차',
    status: '거절됨',
    startDate: '2023-07-1',
    endDate: '2023-07-02',
    reason: '쉬고 싶어요.'
  },
  {
    employeeId: 2,
    name: '유희태',
    department: '기획팀',
    position: '부장',
    hireDate: '2022-1-27',
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
    department: '영업팀',
    position: '대리',
    hireDate: '2020-7-5',
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
    department: '인사팀',
    position: '부장',
    hireDate: '2022-7-27',
    dayOffId: 4,
    requestDate: '2023-03-09',
    type: '반차',
    status: '대기중',
    startDate: '2023-03-20',
    endDate: '2023-03-022',
    reason: '집가고 싶어요.'
  },

  {
    employeeId: 5,
    name: '장진영',
    department: '회계팀',
    position: '차장',
    hireDate: '2017-5-25',
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
    department: '법무팀',
    position: '차장',
    hireDate: '2004-4-23',
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
    department: '영업팀',
    position: '과장',
    hireDate: '2007-3-7',
    dayOffId: 7,
    requestDate: '2022-1-09',
    type: '연차취소',
    status: '대기중',
    startDate: '2022-03-20',
    endDate: '2022-03-22',
    reason: '집가고 싶어요.'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LeaveIProps>
) {
  if (req.method === 'GET') {
    try {
      const resData: LeaveIProps = {
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
