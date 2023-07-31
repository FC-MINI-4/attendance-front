import { useRecoilState } from 'recoil';
import AuthPwCheck from './AuthPwCheck';
import AuthEmailCheck from './AuthEmailCheck';
import { signUpState } from '@/recoil/signUp';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { IAuthSignUpInput } from '@/types/IAuth';
import AuthCheckPw from '@/components/auth/AuthCheckPw';
import { rEmail, rPassword } from '@/constants/constants';

export default function AuthSignUpInput({ ...props }: IAuthSignUpInput) {
  // 회원가입 정보 atom state 구독
  const [signUpInfo, setSignUpInfo] = useRecoilState(signUpState);

  // input 입력 값 atom state 업데이트
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpInfo(prevInformation => ({
      ...prevInformation,
      [name]: value
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
    } else if (props.label === '비밀번호 확인') {
      return (
        <AuthCheckPw
          pwd={signUpInfo.password}
          checkedPwd={signUpInfo.checkedPwd}
        />
      );
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

    return rEmail.test(signUpInfo.password);
  };

  const renderValid = () => {
    if (props.name === 'email') return emailCheck();
    else if (props.name === 'password') return passwordCheck();
    else return true;
  };

  // 유효성에 따른 조건부 렌더링
  const renderRegex = () => {
    if (props.label === '이메일') {
      return <AuthEmailCheck valid={emailCheck()} />;
    }
    if (props.label === '비밀번호') {
      return <AuthPwCheck valid={passwordCheck()} />;
    }
  };

  return (
    <div className="sm:mb-4 mb-2">
      <div className="flex">
        <Input
          label={`${props.label}`}
          name={props.name}
          onChange={handleChange}
          placeholder={props.placeholder}
          type={props.type}
          valid={renderValid()}
        />
        <div className="flex sm:min-w-[5rem] min-w-[4rem] items-end justify-cente ml-4">
          {renderButton()}
        </div>
      </div>
      {renderRegex()}
    </div>
  );
}
