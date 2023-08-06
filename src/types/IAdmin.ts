export interface IMainProps {
  page: string;
}

export interface IMainHeaderProps {
  onToggleSidebar: () => void;
}

export interface IDropdownFilterProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}
export interface ISideBarProps {
  isSidebarOpen: boolean;
}

export interface IFilterProps {
  selectedDepartment: string;
  selectedPosition: string;
  searchValue: string;
  selectedDuty?: string;
  selectedRest?: string;
  selectedStatus?: string;
}

export interface IAdminModifyProps {
  profileImage: string;
  handleChangeFile: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedDepartment: string;
  handleDepartmentChange: (value: string) => void;
  selectedPosition: string;
  handlePositionChange: (value: string) => void;
}

//api

//관리페이지리스트
export interface IManageProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    employees: IManageResProps[];
  };
}

export interface IManageResProps {
  employeeId: number;
  name: string;
  department: string;
  position: string;
  hireDate: string;
  dayOffTotal: number;
  dayOffUsed: number;
  dayOffRemains: number;
}
// 승인된 휴가내역
export interface IDayOffDetailProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    data: IDayOffDetailResProps[];
  };
}
export interface IDayOffDetailResProps {
  dayOffId: number;
  requestDate: string;
  type: string;
  status: string;
  startDate: string;
  endDate: string;
  reason: string;
}
//승인된 당직내역
export interface IDutyDetailProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    data: IDayOffDetailResProps[];
  };
}

export interface IDutyDetailResProps {
  dutyId: number;
  requestDate: string;
  date: string;
  status: string;
}

//연차 요청 관리
export interface ILeaveProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    employees: ILeaveResProps[];
  };
}
export interface ILeaveResProps {
  employeeId: number;
  name: string;
  department: string;
  position: string;
  hireDate: string;
  dayOffId: number;
  requestDate: string;
  type: string;
  status: string;
  startDate: string;
  endDate: string;
  reason: string;
}

//당직 요청 관리
export interface IDutyProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    employees: IDutyResProps[];
  };
}
export interface IDutyResProps {
  dutyId: number;
  type: string;
  employeeId: number;
  name: string;
  department: string;
  position: string;
  hireDate: string;
  requestDate: string;
  date: string;
  status: string;
}

//수정페이지 직원 상세정보

export interface IModifyDetailProps {
  employeeId: number;
  name: string;
  department: string;
  position: string;
  hireDate: string;
  email: string;
  phone: string;
  profileImagePath: string;
}

//수정 및 요청에 대한 응답
export interface IModifyProps {
  success: boolean;
  code: string;
  data: any | null;
  message: string;
}
