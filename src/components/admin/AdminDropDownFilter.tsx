import React from 'react';
import { DropdownFilterIProps } from '@/types/IAdmin';

export const DropdownFilter: React.FC<DropdownFilterIProps> = ({
  options,
  value,
  onChange
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);
  };

  return (
    <div className="w-[7em] flex justify-center ">
      <select className="  text-center" value={value} onChange={handleChange}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
