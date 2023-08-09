import { NextApiRequest, NextApiResponse } from 'next';
import { IManageProps } from '@/types/IAdmin';

const generateRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const dummyEmployees = [
  {
    employeeId: 1,
    name: '이창휘',
    department: '순양자동차',
    position: '사원',
    hireDate: '2022-09-04',
    dayOffTotal: 15,
    dayOffUsed: 7,
    dayOffRemains: 8
  },
  {
    employeeId: 2,
    name: '유희태',
    department: '순양마이크로',
    position: '부장',
    hireDate: '2022-01-27',
    dayOffTotal: 15,
    dayOffUsed: 7,
    dayOffRemains: 8
  },

  {
    employeeId: 3,
    name: '문현수',
    department: '순양백화점',
    position: '대리',
    hireDate: '2020-07-05',
    dayOffTotal: 15,
    dayOffUsed: 7,
    dayOffRemains: 8
  },

  {
    employeeId: 4,
    name: '이가은',
    department: '순양의료원',
    position: '부장',
    hireDate: '2022-07-27',
    dayOffTotal: 15,
    dayOffUsed: 6,
    dayOffRemains: 9
  },

  {
    employeeId: 5,
    name: '장진영',
    department: '순양증권',
    position: '차장',
    hireDate: '2017-05-25',
    dayOffTotal: 15,
    dayOffUsed: 4,
    dayOffRemains: 11
  },

  {
    employeeId: 6,
    name: '정준희',
    department: '순양반도체',
    position: '차장',
    hireDate: '2004-04-23',
    dayOffTotal: 15,
    dayOffUsed: 4,
    dayOffRemains: 11
  },
  {
    employeeId: 7,
    name: '선예은',
    department: '순양반도체',
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
        ? '순양반도체'
        : index % 6 === 1
        ? '순양의료원'
        : index % 6 === 2
        ? '순양마이크로'
        : index % 6 === 3
        ? '순양증권'
        : index % 6 === 4
        ? '순양백화점'
        : '순양자동체',
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
  res: NextApiResponse<IManageProps>
) {
  if (req.method === 'GET') {
    try {
      const resData: IManageProps = {
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
