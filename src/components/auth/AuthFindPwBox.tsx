import PwBox from '@/components/common/PwBox';
import Button from '@/components/common/Button';
import AuthFindPwInput from '@/components/auth/AuthFindPwInput';

export default function AuthFindPwBox() {
  return (
    <PwBox>
      <div className="sm:mb-8 sm:text-3xl">
        순양 계정의
        <br /> 비밀번호를 재설정 합니다.
      </div>
      <div className="text-subTextAndBorder  sm:mb-8">
        비밀번호를 재설정할 계정의 <br /> 이메일을 입력해주세요. <br />
        <br />
        가입하신 이메일로 임시 비밀번호를 발송해드립니다.
      </div>
      <AuthFindPwInput />
      <Button contents={'이메일 전송'} />
    </PwBox>
  );
}
