import { NextApiRequest, NextApiResponse } from 'next';
import { IModifyDetailProps } from '@/types/IAdmin';

// 임시 데이터베이스 대신에 사용할 변수
const dummyEmployeeData: IModifyDetailProps[] = [
  {
    employeeId: 1,
    name: '이창휘',
    department: '개발팀',
    position: '부장',
    hireDate: '2023-09-01',
    email: 'dummy@naver.com',
    phone: '010-1234-1234',
    profileImagePath: 'user.png'
  },
  {
    employeeId: 2,
    name: '유희태',
    department: '마케팅팀',
    position: '대리',
    hireDate: '2022-05-15',
    email: 'dummy2@naver.com',
    phone: '010-5678-5678',
    profileImagePath: 'user2.png'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const { employeeId } = req.query;
      const id = Number(employeeId); // employeeId는 문자열로 받아올 수 있으므로 숫자로 변환

      const selectedEmployee = dummyEmployeeData.find(
        employee => employee.employeeId === id
      );

      if (selectedEmployee) {
        const resData = {
          success: true,
          code: 'SUCCESS',
          message: '성공했습니다.',
          data: selectedEmployee
        };
        return res.status(200).json(resData);
      } else {
        return res.status(404).json({
          success: false,
          code: 'NOT_FOUND',
          message: '해당 직원을 찾을 수 없습니다.'
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: false,
        code: 'INTERNAL_ERROR',
        message: '서버 오류가 발생하였습니다.'
      });
    }
  } else {
    return res.status(405).end();
  }
}
