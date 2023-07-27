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
