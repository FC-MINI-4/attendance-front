import { useState } from 'react';
import { Cookies } from 'react-cookie';
import { useRouter } from 'next/router';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { rPassword } from '@/constants/constants';
import { requestResetPw } from '@/api/auth/resetPw';
import AuthValidCheck from '@/components/auth/sign-up/AuthValidCheck';

export default function AuthResetPwInput() {
  const router = useRouter();
  const { query } = router;

  // 액세스 토큰을 request body?
  const cookie = new Cookies();
  const accessToken = cookie.get('accessToken');
  // query에서 받아온 authToken
  const authToken = query.authToken;

  const [password, setPassword] = useState('');
  const [confirmPassword, setComfirmPassword] = useState('');

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };

  const handleConfirmPwChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setComfirmPassword(event?.target.value);
  };

  // 비밀번호 형식 유효성 체크
  const passwordCheck = () => {
    if (password.trim() === '') {
      return true;
    }
    return rPassword.test(password);
  };

  // 비밀번호 확인 유효성 체크
  const confirmPasswordCheck = () => {
    if (confirmPassword.trim() === '' && confirmPassword.length > 0) {
      return false;
    }
    return password === confirmPassword;
  };

  // 비밀번호 변경 버튼 활성화 여부
  const isDisabled =
    passwordCheck() &&
    confirmPasswordCheck() &&
    password.length > 7 &&
    password.length < 17;

  // 유효성 검사
  const renderCheck = (isPassword: boolean) => {
    if (isPassword) {
      return <AuthValidCheck valid={passwordCheck()} name={'password'} />;
    } else {
      return (
        <AuthValidCheck
          valid={confirmPasswordCheck()}
          name={'confirmPassword'}
        />
      );
    }
  };

  //
  const handleResetPw = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await requestResetPw({
        accessToken: accessToken,
        password: password,
        confirmPassword: confirmPassword
      });
      if (response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {}
  };

  return (
    <>
      <form onSubmit={handleResetPw}>
        <div className="sm:mb-8 mb-8">
          <Input
            label={'새로운 비밀번호'}
            name={'password'}
            onChange={handlePasswordChange}
            placeholder={'영문+숫자, 8자리 이상 16자리 이하'}
            type="password"
            valid={passwordCheck()}
          />
          {renderCheck(true)}
        </div>
        <div className="sm:mb-8 mb-8">
          <Input
            label={'비밀번호 확인'}
            name={'password'}
            onChange={handleConfirmPwChange}
            placeholder={'비밀번호를 한번 더 입력해주세요.'}
            type="password"
            valid={confirmPasswordCheck()}
          />
          {renderCheck(false)}
        </div>
        <Button contents={'변경하기'} disabled={!isDisabled} submit />
      </form>
    </>
  );
}
