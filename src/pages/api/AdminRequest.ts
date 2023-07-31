import { NextApiRequest, NextApiResponse } from 'next';
import { ManageIProps } from '@/types/IAdmin';

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const dummyEmployees = [
  {
    employeeId: 1,
    name: '이창휘',
    department: '개발팀',
    position: '사원',
    hireDate: '2022-09-04',
    dayOffTotal: 15,
    dayOffUsed: 7,
    dayOffRemains: 8
  },
  {
    employeeId: 2,
    name: '유희태',
    department: '기획팀',
    position: '부장',
    hireDate: '2022-01-27',
    dayOffTotal: 15,
    dayOffUsed: 7,
    dayOffRemains: 8
  },

  {
    employeeId: 3,
    name: '문현수',
    department: '영업팀',
    position: '대리',
    hireDate: '2020-07-05',
    dayOffTotal: 15,
    dayOffUsed: 7,
    dayOffRemains: 8
  },

  {
    employeeId: 4,
    name: '이가은',
    department: '인사팀',
    position: '부장',
    hireDate: '2022-07-27',
    dayOffTotal: 15,
    dayOffUsed: 6,
    dayOffRemains: 9
  },

  {
    employeeId: 5,
    name: '장진영',
    department: '회계팀',
    position: '차장',
    hireDate: '2017-05-25',
    dayOffTotal: 15,
    dayOffUsed: 4,
    dayOffRemains: 11
  },

  {
    employeeId: 6,
    name: '정준희',
    department: '법무팀',
    position: '차장',
    hireDate: '2004-04-23',
    dayOffTotal: 15,
    dayOffUsed: 4,
    dayOffRemains: 11
  },
  {
    employeeId: 7,
    name: '선예은',
    department: '영업팀',
    position: '과장',
    hireDate: '2007-03-07',
    dayOffTotal: 15,
    dayOffUsed: 4,
    dayOffRemains: 11
  },
  ...Array.from({ length: 92 }, (_, index) => ({
    employeeId: 8 + index,
    name: `사원${8 + index}`,
    department:
      index % 6 === 0
        ? '회계팀'
        : index % 6 === 1
        ? '인사팀'
        : index % 6 === 2
        ? '법무팀'
        : index % 6 === 3
        ? '기획팀'
        : index % 6 === 4
        ? '개발팀'
        : '영업팀',
    position:
      index % 4 === 0
        ? '과장'
        : index % 4 === 1
        ? '부장'
        : index % 4 === 2
        ? '차장'
        : '사원',
    hireDate: `20${7 + index}-0${1 + (index % 9)}-0${1 + (index % 9)}`,
    dayOffTotal: 15,
    dayOffUsed: generateRandomNumber(1, 15),
    dayOffRemains: 15 - generateRandomNumber(1, 15)
  }))
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ManageIProps>
) {
  if (req.method === 'GET') {
    try {
      const resData: ManageIProps = {
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
