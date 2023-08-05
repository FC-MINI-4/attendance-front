import { RecoilRoot } from 'recoil';
import Button from '@/components/common/Button';
import { SIGNUP_INPUT_INFO } from '@/constants/constants';
import AuthSignUpInput from '@/components/auth/sign-up/AuthSignUpInput';
import AuthSignUpTitle from '@/components/auth/sign-up/AuthSignUpTitle';
import SinglePicker from '@/components/common/SinglePicker';

export default function SignUp() {
  return (
    <RecoilRoot>
      <div className="mx-auto sm:w-[500px] sm:my-[90px]">
        <AuthSignUpTitle />
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
        <div className="text-xs sm:text-base font-semibold ">입사일</div>
        <div className="border-b-2 border-gray-200 mb-4 sm:w-full sm:max-w-[calc(100%-6rem)]">
          <SinglePicker />
        </div>
        <Button contents={'회원가입'} />
      </div>
    </RecoilRoot>
  );
}
