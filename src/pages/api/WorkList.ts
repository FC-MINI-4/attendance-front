import { NextApiRequest, NextApiResponse } from 'next';
import { MyPageDutyIProps } from '@/types/IMyPages';

const dummyEmployees = [
  { employeeId: 1,
    type: '당직',
    date: '2023-7-21',
    reason: '개인사정이요',
    status: '대기중'
  },
  { employeeId: 2,
    type: '당직',
    date: '2023-7-22',
    reason: '개인사정이요',
    status: '대기중'
  },

  { employeeId: 3,
    type: '당직',
    date: '2023-7-23',
    reason: '개인사정이요',
    status: '거절됨'
  },
  { employeeId: 4,
    type: '당직',
    date: '2023-7-24',
    reason: '개인사정이요',
    status: '승인됨'
  },

  { employeeId: 5,
    type: '당직',
    date: '2023-7-25',
    reason: '개인사정이요',
    status: '대기중'
  }
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<MyPageDutyIProps>
) {
  if (req.method === 'GET') {
    try {
      const resData: MyPageDutyIProps = {
        success: true,
        code: 'SUCCESS',
        message: '성공했습니다.',
        data: {
          duties: dummyEmployees // 더미 직원 데이터를 응답 데이터로 설정
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
    // GET 요청 외에 다른 요청은 허용x
    res.status(405).end();
  }
}
