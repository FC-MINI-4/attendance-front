import { NextApiRequest, NextApiResponse } from 'next';
import { DataIProps } from '@/types/IAdmin';

const dummyEmployees = [
  {
    employeeId: 1,
    name: '이창휘',
    department: '개발팀',
    position: '사원',
    hireDate: '2022-9-4',
    dayOffTotal: 15,
    dayOffUsed: 7,
    dayOffRemains: 8
  },
  {
    employeeId: 2,
    name: '유희태',
    department: '기획팀',
    position: '부장',
    hireDate: '2022-1-27',
    dayOffTotal: 15,
    dayOffUsed: 7,
    dayOffRemains: 8
  },

  {
    employeeId: 3,
    name: '문현수',
    department: '영업팀',
    position: '대리',
    hireDate: '2020-7-5',
    dayOffTotal: 15,
    dayOffUsed: 7,
    dayOffRemains: 8
  },

  {
    employeeId: 4,
    name: '이가은',
    department: '인사팀',
    position: '부장',
    hireDate: '2022-7-27',
    dayOffTotal: 15,
    dayOffUsed: 6,
    dayOffRemains: 9
  },

  {
    employeeId: 5,
    name: '장진영',
    department: '회계팀',
    position: '차장',
    hireDate: '2017-5-25',
    dayOffTotal: 15,
    dayOffUsed: 4,
    dayOffRemains: 11
  },

  {
    employeeId: 6,
    name: '정준희',
    department: '법무팀',
    position: '차장',
    hireDate: '2004-4-23',
    dayOffTotal: 15,
    dayOffUsed: 4,
    dayOffRemains: 11
  },
  {
    employeeId: 7,
    name: '선예은',
    department: '영업팀',
    position: '과장',
    hireDate: '2007-3-7',
    dayOffTotal: 15,
    dayOffUsed: 4,
    dayOffRemains: 11
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataIProps>
) {
  if (req.method === 'GET') {
    try {
      const resData: DataIProps = {
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
