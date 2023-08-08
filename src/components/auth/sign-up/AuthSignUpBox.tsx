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
      const formData = new FormData();
      formData.append('email', signUpData.email);
      formData.append('department', signUpData.department);
      formData.append('password', signUpData.password);
      formData.append('confirmPassword', signUpData.confirmPassword);
      formData.append('hireDate', signUpData.hireDate);
      formData.append('name', signUpData.name);
      formData.append('phone', signUpData.phone);
      formData.append('profileImageFile', signUpData.profileUrl);

      const response = await requestSignUp(formData);
      if (response.status === 200) {
        const userData = response.data;
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
      <form onSubmit={handleSignUp} encType="multipart/form-data">
        <Button contents={'회원가입'} submit />
      </form>
    </div>
  );
}
