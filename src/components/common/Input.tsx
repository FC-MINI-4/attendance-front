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
        className="text-xs sm:text-base min-w-[5rem] sm:min-w-[10rem] flex"
        htmlFor={props.label}>
        {props.label}
      </label>
      <input
        name={props.name}
        id={props.label}
        className={`${
          props.valid ? 'focus:border-primary' : 'focus:border-secondary'
        } mt-1 h-10 w-full rounded-lg border-2 border-subTextAndBorder px-3 py-2 text-xs outline-none transition sm:h-12 sm:text-base`}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        onKeyUp={props.onKeyUp}
        type={props.type}
      />
    </div>
  );
}
