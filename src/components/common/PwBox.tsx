import { ILayout } from '@/types/ICommon';

export default function PwBox({ children, ...props }: ILayout) {
  return (
    <div
      {...props}
      className="border border-subTextAndBorder sm:p-16 p-8 rounded-md sm:mt-12">
      {children}
    </div>
  );
}
