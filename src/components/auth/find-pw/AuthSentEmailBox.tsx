import PwBox from '@/components/common/PwBox';

export default function AuthSentEmailBox() {
  return (
    <PwBox>
      <div className="mb-8 text-3xl flex justify-center">
        입력하신 이메일로 비밀번호가 전송되었습니다.
      </div>
      <div className="text-subTextAndBorder mb-8 text-xl flex justify-center">
        입력하신 이메일을 확인하여 계정의 비밀번호를 재설정하세요.
      </div>
    </PwBox>
  );
}
