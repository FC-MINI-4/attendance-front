import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { useState } from 'react';
import { rEmail } from '@/constants/constants';

export default function AuthFindPwInput() {
  const [email, setEmail] = useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
          onChange={onChange}
          placeholder={'예: jindojoon@soonyang.com'}
          valid={true}
        />
      </div>
      <Button contents={'이메일 전송'} disabled={!emailCheck()} />
    </>
  );
}
