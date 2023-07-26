import { IButtonProps } from '@/types/ICommon';

export default function Button({
  contents,
  onClick,
  submit,
  secondary,
  disabled,
}: IButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
      className={`${
        secondary ? 'bg-white text-primary' : 'text-white bg-primary'
      } block h-10 w-full rounded-md border-2 border-primary px-3 py-2 text-sm font-bold ring-subTextAndBorder ring-offset-2 transition hover:opacity-80 focus:ring-2 active:scale-95 disabled:pointer-events-none disabled:opacity-30 sm:h-12 sm:text-base`}
    >
      {contents}
    </button>
  );
}
