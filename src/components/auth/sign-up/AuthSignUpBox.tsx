import { useRecoilValue } from 'recoil';
import { signUpState } from '@/recoil/signUp';
import Button from '@/components/common/Button';
import { requestSignUp } from '@/api/auth/signUp';
import { TEMP_DEPARTMENT } from '@/constants/option';
import { SIGNUP_INPUT_INFO } from '@/constants/constants';
import AuthDropdown from '@/components/common/AuthDropdown';
import SinglePicker from '@/components/common/SinglePicker';
import AuthSignUpInput from '@/components/auth/sign-up/AuthSignUpInput';

export default function AuthSignUpBox() {
  const signUpData = useRecoilValue(signUpState);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await requestSignUp({
        email: signUpData.email,
        department: signUpData.department,
        position: signUpData.position,
        password: signUpData.password,
        confirmPassword: signUpData.confirmPassword,
        hireDate: signUpData.hireDate,
        name: signUpData.name,
        phone: signUpData.phone
      });
      if (response.status === 200) {
        const userData = response.data.data;
      }
    } catch (error) {}
  };
  return (
    <div>
      <div className="text-xs sm:text-base font-semibold pl-1 text-mainBlack">
        계열사*
      </div>
      <AuthDropdown options={TEMP_DEPARTMENT} label={'계열사'} admin={false} />
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
      <form onSubmit={handleSignUp}>
        <Button contents={'회원가입'} submit />
      </form>
    </div>
  );
}
