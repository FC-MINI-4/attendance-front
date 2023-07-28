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

export interface EmployeeIProps {
  employeeId: number;
  name: string;
  department: string;
  position: string;
  hireDate: string;
  dayOffTotal: number;
  dayOffUsed: number;
  dayOffRemains: number;
}

export interface DataIProps {
  success: boolean;
  code: string;
  message: string;
  data?: {
    employees: EmployeeIProps[];
  };
}

export interface RequestBody {
  name: string;
  value: number;
}
