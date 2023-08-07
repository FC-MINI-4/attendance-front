import { NextApiRequest, NextApiResponse } from 'next';
import { MypageLeaveIProps } from '@/types/IMyPages';

const dummyEmployees = [
  { employeeId: 1,
    type: "연차",
    startDate: "2023-07-08",
    endDate : "2023-07-10",
    reason: "개인사정이요",
    status: "대기중"
  },
  { employeeId: 2,
    type: "반차",
    startDate: "2023-06-08",
    endDate : "2023-06-10",
    reason: "개인사정이 있네요",
    status: "승인됨"
  },

  { employeeId: 3,
    type: "특별휴가",
    startDate: "2023-04-23",
    endDate : "2023-05-01",
    reason: "개인사정이 있네요",
    status: "승인됨"
  },

  { employeeId: 4,
    type: "반차",
    startDate: "2023-05-08",
    endDate : "2023-05-10",
    reason: "개인사정이 있네요",
    status: "승인됨"
  },

  { employeeId: 5,
    type: "반차",
    startDate: "2023-06-08",
    endDate : "2023-06-10",
    reason: "개인사정이 있네요",
    status: "승인됨"
  },
  
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse< MypageLeaveIProps >
) {
  if (req.method === 'GET') {
    try {
      const resData:  MypageLeaveIProps  = {
        success: true,
        code: 'SUCCESS',
        message: '성공했습니다.',
        data: {
          dayOffs: dummyEmployees // 더미 직원 데이터를 응답 데이터로 설정
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
