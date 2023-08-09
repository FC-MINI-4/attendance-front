import { NextApiRequest, NextApiResponse } from 'next';
import { IDayOffDetailProps } from '@/types/IAdmin';

const dummyEmployees = [
  {
    dayOffId: 1,
    requestDate: '2023-07-03',
    type: '연차',
    status: '승인됨',
    startDate: '2023-07-12',
    endDate: '2023-07-14',
    reason: '쉬고싶어'
  },
  {
    dayOffId: 2,
    requestDate: '2023-02-03',
    type: '연차',
    status: '승인됨',
    startDate: '2023-07-12',
    endDate: '2023-07-14',
    reason: '쉬고싶어'
  },
  {
    dayOffId: 3,
    requestDate: '2023-04-03',
    type: '연차',
    status: '승인됨',
    startDate: '2023-07-12',
    endDate: '2023-07-14',
    reason: '쉬고싶어'
  },
  {
    dayOffId: 4,
    requestDate: '2023-01-03',
    type: '연차',
    status: '승인됨',
    startDate: '2023-07-12',
    endDate: '2023-07-14',
    reason: '쉬고싶어'
  },
  {
    dayOffId: 5,
    requestDate: '2023-03-03',
    type: '연차',
    status: '승인됨',
    startDate: '2023-07-12',
    endDate: '2023-07-14',
    reason: '쉬고싶어'
  },
  {
    dayOffId: 6,
    requestDate: '2023-05-03',
    type: '연차',
    status: '승인됨',
    startDate: '2023-07-12',
    endDate: '2023-07-14',
    reason: '쉬고싶어'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IDayOffDetailProps>
) {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      const employee = dummyEmployees.find(emp => emp.dayOffId === Number(id));

      if (!employee) {
        res.status(404).json({
          success: false,
          code: 'NOT_FOUND',
          message: '직원의 상세 정보를 찾을 수 없습니다.'
        });
      } else {
        const resData: IDayOffDetailProps = {
          success: true,
          code: 'SUCCESS',
          message: '성공했습니다.',
          data: {
            data: [employee] // 검색된 직원의 정보를 배열에 담아서 응답
          }
        };
        res.status(200).json(resData);
      }
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
