export interface MypageLeaveResIProps {
    employeeId: number
    type: string;
    startDate: string;
    endDate: string;
    reason: string;
    status: string;
  }
  
  export interface MypageLeaveIProps {
    success: boolean;
    code: string;
    message: string;
    data?: {
      dayOffs: MypageLeaveResIProps[];
    };
  }
  
  export interface MyPageDutyResIProps {
    employeeId: number
    type: string;
    date: string;
    reason: string;
    status: string;
  }
  
  export interface MyPageDutyIProps {
    success: boolean;
    code: string;
    message: string;
    data?: {
      duties: MyPageDutyResIProps[];
    };
  }