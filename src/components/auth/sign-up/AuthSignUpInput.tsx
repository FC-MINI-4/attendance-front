import { useState } from 'react';
import Input from '@/components/common/Input';
import { IAuthSignUpInput } from '@/types/IAuth';
import Button from '@/components/common/Button';
import AuthCheckPw from '@/components/auth/AuthCheckPw';

export default function AuthSignUpInput({
  info,
  button,
  placeholder,
  enLabel,
  type
}: IAuthSignUpInput) {
  const [signupInput, setSignupInput] = useState({
    profileUrl: '',
    position: '',
    name: '',
    email: '',
    password: '',
    checkedPwd: '',
    phone: '',
    hireDate: ''
  });

  const { password, checkedPwd } = signupInput;

  // console.log(`password: ${password}`);
  // console.log(`checked : ${checkedPwd}`);

  // input 입력 값 처리
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupInput({
      ...signupInput,
      [name]: value
    });
  };

  // 이메일 중복 체크 (업데이트 전)
  const onDuplicateClick = () => {
    alert('사용 가능한 이메일입니다.');
  };

  // 조건부 버튼 렌더링
  const renderButton = () => {
    if (button) {
      if (button === '중복확인')
        return (
          <Button contents={button} onClick={onDuplicateClick} secondary />
        );
      else {
        return (
          <Button contents={button} onClick={onDuplicateClick} secondary />
        );
      }
    } else if (info === '비밀번호 확인') {
      return <AuthCheckPw pwd={password} checkedPwd={checkedPwd} />;
    } else return;
  };

  return (
    <div className="flex mb-4">
      <Input
        label={`${info}`}
        name={enLabel}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
      />
      <div className="flex sm:min-w-[5rem] min-w-[4rem] items-end justify-cente ml-4">
        {renderButton()}
      </div>
    </div>
  );
}
