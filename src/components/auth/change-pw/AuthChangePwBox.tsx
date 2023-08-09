import PwBox from '@/components/common/PwBox';
import AuthChangePwInput from '@/components/auth/change-pw/AuthChangePwInput';

export default function AuthChangePwBox() {
  return (
    <PwBox>
      <div className="sm:mb-8 sm:text-3xl mb-4 text-sm">
        순양 계정의
        <br /> 비밀번호를 재설정합니다.
      </div>
      <div className="text-subTextAndBorder text-lg mb-8">
        재설정할 비밀번호를 <br /> 입력해주세요.
      </div>
      <AuthChangePwInput />
    </PwBox>
  );
}
