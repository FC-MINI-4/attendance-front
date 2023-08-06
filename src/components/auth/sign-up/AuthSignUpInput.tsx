import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { signupState } from '@/recoil/signup';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { IAuthSignUpInput } from '@/types/IAuth';
import { rEmail, rPassword } from '@/constants/constants';
import AuthValidCheck from '@/components/auth/sign-up/AuthValidCheck';

export default function AuthSignUpInput({ ...props }: IAuthSignUpInput) {
  // 회원가입 정보 atom state 구독
  const [signUpInfo, setSignUpInfo] = useRecoilState(signupState);
  // 휴대폰 번호를 저장하는 state
  const [phoneNumber, setPhoneNumber] = useState('');

  // input 입력 값 atom state 업데이트
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpInfo(prevInformation => ({
      ...prevInformation,
      [name]: value
    }));
  };

  // 휴대폰 번호 입력 핸들러
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    const hyphenNumber = value
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, `$1-$2-$3`);

    setPhoneNumber(hyphenNumber);

    setSignUpInfo(prevInformation => ({
      ...prevInformation,
      [name]: hyphenNumber
    }));
  };

  // 이메일 중복 체크 (업데이트 전)
  const onDuplicateClick = () => {
    alert('사용 가능한 이메일입니다.');
  };

  // 버튼 & 비밀번호 확인 조건부 렌더링
  const renderButton = () => {
    // button props가 있을 때
    if (props.button) {
      // 중복확인 버튼일 경우
      if (props.button === '중복확인')
        return (
          <Button
            contents={props.button}
            onClick={onDuplicateClick}
            secondary
          />
        );
      // 업로드 버튼일 경우
      else {
        return (
          <Button
            contents={props.button}
            onClick={onDuplicateClick}
            secondary
          />
        );
      }
      // 비밀번호 확인일 경우
    } else return;
  };

  // 이메일 형식 유효성 체크
  const emailCheck = () => {
    if (signUpInfo.email.trim() === '') {
      return true;
    }

    return rEmail.test(signUpInfo.email);
  };

  // 비밀번호 형식 유효성 체크
  const passwordCheck = () => {
    if (signUpInfo.password.trim() === '') {
      return true;
    }

    return rPassword.test(signUpInfo.password);
  };

  // 비밀번호 확인 유효성 체크
  const confirmPasswordCheck = () => {
    if (signUpInfo.confirmPassword.trim() === '') {
      return true;
    }
    return signUpInfo.password === signUpInfo.confirmPassword;
  };

  // 이메일 또는 비밀번호에 유효성 검사 렌더링
  const renderValid = () => {
    if (props.name === 'email') return emailCheck();
    else if (props.name === 'password') return passwordCheck();
    else return true;
  };

  // 유효성에 따른 조건부 렌더링
  const renderRegex = () => {
    if (props.name === 'email') {
      return <AuthValidCheck valid={emailCheck()} name={props.name} />;
    } else if (props.name === 'password') {
      return <AuthValidCheck valid={passwordCheck()} name={props.name} />;
    } else if (props.name === 'confirmPassword') {
      return (
        <AuthValidCheck valid={confirmPasswordCheck()} name={props.name} />
      );
    }
  };

  return (
    <div className="sm:mb-4 mb-2">
      <div className="flex">
        <Input
          label={`${props.label}`}
          name={props.name}
          onChange={
            props.name === 'phone' ? handlePhoneChange : handleInputChange
          }
          placeholder={props.placeholder}
          value={props.name === 'phone' ? phoneNumber : signUpInfo[props.name]}
          valid={renderValid()}
          type={props.type}
        />
        <div className="flex sm:min-w-[5rem] min-w-[4rem] items-end justify-center ml-4">
          {renderButton()}
        </div>
      </div>
      {renderRegex()}
    </div>
  );
}
