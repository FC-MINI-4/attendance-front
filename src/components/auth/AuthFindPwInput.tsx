import { useState } from 'react';
import Input from '@/components/common/Input';
import { rEmail } from '@/constants/constants';
import Button from '@/components/common/Button';


export default function AuthFindPwInput() {
  const [email, setEmail] = useState('');


  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value);
  };

  // 이메일 형식 유효성 체크
  const emailCheck = () => {
    return rEmail.test(email);
  };

  return (
    <>
      <div className="mb-16">
        <Input
          label={'이메일'}
          name={'email'}
          onChange={handleEmailChange}
          placeholder={'예: jindojoon@soonyang.com'}
          valid={emailCheck()}
        />
      </div>
      <Button contents={'이메일 전송'} disabled={!emailCheck()} />
    </>
  );
}
