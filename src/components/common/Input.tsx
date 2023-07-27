interface InputProps {
  placeholder?: string;
  value?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  type?: string;
  label?: string;
  name: string;
}

export default function Input({
  placeholder,
  value,
  onChange,
  onKeyUp,
  type,
  label,
  name
}: InputProps) {
  return (
    <div className="w-full">
      <label
        className="text-xs sm:text-base min-w-[5rem] sm:min-w-[10rem] flex"
        htmlFor={label}>
        {label}
      </label>
      <input
        name={name}
        id={label}
        className="mt-1 h-10 w-full rounded-lg border-2 border-subTextAndBorder px-3 py-2 text-xs outline-none transition focus:border-primary sm:h-12 sm:text-base"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onKeyUp={onKeyUp}
        type={type}
      />
    </div>
  );
}
