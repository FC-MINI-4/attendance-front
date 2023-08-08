import { useState } from 'react';
import useAccessToken from '@/hooks/useToken';
import Input from '@/components/common/Input';
import { rEmail } from '@/constants/constants';
import Button from '@/components/common/Button';
import { requestFindPw } from '@/api/auth/findPw';

export default function AuthFindPwInput() {
  const accessToken = useAccessToken(); // 액세스 토큰 가져오기
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event?.target.value);
  };

  // 이메일 형식 유효성 체크
  const emailCheck = () => {
    return rEmail.test(email);
  };

  const handleFindPw = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await requestFindPw({
        email: email,
        accessToken: accessToken
      });
    } catch (error) {}
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
      <form onSubmit={handleFindPw}>
        <Button contents={'이메일 전송'} disabled={!emailCheck()} submit />
      </form>
    </>
  );
}
