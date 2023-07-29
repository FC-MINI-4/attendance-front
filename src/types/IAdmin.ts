export interface MainIProps {
  page: string;
}

export interface MainHeaderIProps {
  onToggleSidebar: () => void;
}

export interface DropdownFilterIProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}
export interface SideBarIProps {
  isSidebarOpen: boolean;
}

export interface FilterIProps {
  selectedDepartment: string;
  selectedPosition: string;
  searchValue: string;
  selectedDuty?: string;
  selectedRest?: string;
  selectedStatus?: string;
}

export interface ManageResIProps {
  employeeId: number;
  name: string;
  department: string;
  position: string;
  hireDate: string;
  dayOffTotal: number;
  dayOffUsed: number;
  dayOffRemains: number;
}

export interface ManageIProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    employees: ManageResIProps[];
  };
}

export interface LeaveResIProps {
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

export interface LeaveIProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    employees: LeaveResIProps[];
  };
}

export interface DutyResIProps {
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

export interface DutyIProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    duties: DutyResIProps[];
  };
}
