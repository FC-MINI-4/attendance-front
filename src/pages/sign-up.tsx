import { RecoilRoot } from 'recoil';
import Button from '@/components/common/Button';
import { SIGNUP_INPUT_INFO } from '@/constants/constants';
import AuthSignUpInput from '@/components/auth/sign-up/AuthSignUpInput';
import AuthSignUpTitle from '@/components/auth/sign-up/AuthSignUpTitle';

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
        <Button contents={'회원가입'} />
      </div>
    </RecoilRoot>
  );
}
