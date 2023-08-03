import { useState } from 'react';
import ko from 'date-fns/locale/ko'; // 한국어 locale import
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function SinglePicker({ ...props }) {
  const [selected, setSelected] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelected(date);
  };
  return (
    <DatePicker
      selected={selected}
      startDate={props.value}
      onChange={handleDateChange}
      dateFormat="yyyy-MM-dd"
      className="w-[185px] h-[2.5rem]"
      placeholderText="입사일을 선택해주세요."
      locale={ko}
    />
  );
}
