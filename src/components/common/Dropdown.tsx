import { useSetRecoilState } from 'recoil';
import { IDropdown } from '@/types/ICommon';
import { signUpState } from '@/recoil/signUp';

export default function Dropdown({ ...props }: IDropdown) {
  // 회원가입 정보 atom state 구독
  const setSignUpInfo = useSetRecoilState(signUpState);

  // 드롭다운 option 선택 핸들링 함수
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    props.onChange(selectedValue);

    const { value, name } = event.target;
    setSignUpInfo(prevInformation => ({
      ...prevInformation,
      [name]: value
    }));
  };

  return (
    <>
      <label
        htmlFor="dropdown"
        className="pl-1 text-xs sm:text-base min-w-[5rem] sm:min-w-[10rem] flex font-semibold">
        {props.label}
      </label>
      <div
        className={`${props.admin ? 'w-[7em] flex justify-center' : 'flex'}`}>
        <select
          className={`${
            props.admin
              ? 'text-center'
              : 'pt-2 text-left border-b-2 h-10 border-gray-200 mb-4 min-w-[calc(100%-6rem)]'
          } `}
          value={props.value}
          onChange={handleChange}
          name={'department'}>
          {props.options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
