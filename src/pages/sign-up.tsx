import { RecoilRoot } from 'recoil';
import Button from '@/components/common/Button';
import { TEMP_DEPARTMENT } from '@/constants/option';
import { SIGNUP_INPUT_INFO } from '@/constants/constants';
import AuthDropdown from '@/components/common/AuthDropdown';
import SinglePicker from '@/components/common/SinglePicker';
import AuthSignUpInput from '@/components/auth/sign-up/AuthSignUpInput';
import AuthSignUpTitle from '@/components/auth/sign-up/AuthSignUpTitle';

export default function SignUp() {
  return (
    <RecoilRoot>
      <div className="mx-auto sm:w-[500px] sm:my-[90px]">
        <AuthSignUpTitle />
        <div className="text-xs sm:text-base font-semibold pl-1 text-mainBlack">
          계열사*
        </div>
        <AuthDropdown
          options={TEMP_DEPARTMENT}
          label={'계열사'}
          admin={false}
        />
        {SIGNUP_INPUT_INFO.map(value => (
          <AuthSignUpInput
            key={value.label}
            label={value.label}
            button={value.button}
            placeholder={value.placeholder}
            name={value.name}
            type={value.type}
          />
        ))}
        <div className="text-xs sm:text-base font-semibold pl-1 text-mainBlack">
          입사일
        </div>
        <div className="border-b-2 border-gray-200 mb-4 sm:w-full sm:max-w-[calc(100%-6rem)] pl-1">
          <SinglePicker name={'hireDate'} />
        </div>
        <Button contents={'회원가입'} />
      </div>
    </RecoilRoot>
  );
}
