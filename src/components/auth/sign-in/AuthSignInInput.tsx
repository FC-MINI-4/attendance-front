import { useRecoilState } from 'recoil';
import Input from '@/components/common/Input';
import { signinState } from '@/recoil/signin';

export default function AuthSignInInput() {
  // 회원가입 정보 atom state 구독
  const [signinInfo, setSigninInfo] = useRecoilState(signinState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSigninInfo(prevInformation => ({
      ...prevInformation,
      [name]: value
    }));
  };

  return (
    <>
      <div className="sm:mb-4 mb-4">
        <Input
          label={'이메일'}
          name={'email'}
          onChange={handleInputChange}
          placeholder={'예: jinyangchul@soonyang.com'}
          type="email"
          valid={true}
          value={signinInfo.email}
        />
      </div>
      <div className="sm:mb-16 mb-8">
        <Input
          label={'비밀번호'}
          name={'password'}
          onChange={handleInputChange}
          placeholder={'영문+숫자, 8자리 이상 16자리 이하'}
          type="password"
          valid={true}
          value={signinInfo.password}
        />
      </div>
    </>
  );
}
