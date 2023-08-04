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

export interface IManageProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    employees: IManageResProps[];
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

export interface ILeaveProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    employees: ILeaveResProps[];
  };
}

export interface IDutyResProps {
  dutyId: number;
  employeeId: number;
  name: string;
  department: string;
  position: string;
  hireDate: string;
  requestDate: string;
  date: string;
  status: '대기중';
}

export interface IDutyProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    duties: IDutyResProps[];
  };
}

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
