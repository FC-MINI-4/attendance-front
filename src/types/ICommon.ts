import { ReactNode } from 'react';

// Button Interface
export interface IButtonProps {
  contents: string | JSX.Element;
  onClick?: () => void;
  submit?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}

// Layout Interface
export interface ILayout {
  children: ReactNode;
  [key: string]: any;
}

export interface PaginationIProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selected: number) => void;
}
