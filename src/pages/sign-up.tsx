import Button from '@/components/common/Button';
import { SIGNUP_INPUT_INFO } from '@/constants/constants';
import AuthSignUpInput from '@/components/auth/AuthSignUpInput';
import AuthSignUpTitle from '@/components/auth/AuthSignUpTitle';

export default function SignUp() {
  return (
    <div className="mx-auto sm:w-[500px] sm:my-[90px]">
      <AuthSignUpTitle />
      {SIGNUP_INPUT_INFO.map(value => (
        <AuthSignUpInput
          key={value.label}
          info={value.label}
          button={value.button}
          placeholder={value.placeholder}
          enLabel={value.enLabel}
        />
      ))}
      <Button contents={'회원가입'} />
    </div>
  );
}
