interface IInputProps {
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  name: string;
  valid?: boolean;
}

export default function Input({ ...props }: IInputProps) {
  return (
    <div className="w-full">
      <label
        className={`${
          props.valid ? 'text-primary' : 'text-secondary'
        } text-xs sm:text-base min-w-[5rem] sm:min-w-[10rem] flex font-semibold`}
        htmlFor={props.label}>
        {props.label}
      </label>
      <input
        name={props.name}
        id={props.label}
        className={`${
          props.valid ? 'focus:border-primary' : 'focus:border-secondary'
        } h-10 pt-3 w-full border-b-2 border-gray-200 pr-3 text-xs outline-none transition sm:h-12 sm:text-base`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        type={props.type}
      />
    </div>
  );
}
