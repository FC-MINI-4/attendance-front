import { useState } from 'react';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { rPassword } from '@/constants/constants';
import { requestChangePw } from '@/api/auth/changePw';
import AuthValidCheck from '@/components/auth/sign-up/AuthValidCheck';

export default function AuthChangePwInput() {
  const [currentPassword, setcurrentPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setComfirmPassword] = useState('');

  const handleCurrentPw = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcurrentPassword(event?.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event?.target.value);
  };

  const handleConfirmPw = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  // form data 전송
  const handleChangePw = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      // 비밀번호 변경 (로그인 시)
      const response = await requestChangePw({
        password: password,
        confirmPassword: confirmPassword,
        authToken: '1234'
      });
      if (!response.data.success) {
        alert(response.data.message);
      }
    } catch (error) {}
  };

  return (
    <>
      <form onSubmit={handleChangePw}>
        <div className="sm:mb-8 mb-8">
          <Input
            label={'현재 비밀번호'}
            name={'password'}
            onChange={handleCurrentPw}
            placeholder={'영문+숫자, 8자리 이상 16자리 이하'}
            type="password"
            valid={passwordCheck()}
          />
          {renderCheck(true)}
        </div>
        <div className="sm:mb-8 mb-8">
          <Input
            label={'새로운 비밀번호'}
            name={'password'}
            onChange={handlePassword}
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
            onChange={handleConfirmPw}
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
