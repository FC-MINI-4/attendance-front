import { IAuthCheckPw } from '@/types/IAuth';

// 비밀번호 확인 체크 컴포넌트
export default function AuthPwCheck({ pwd, checkedPwd }: IAuthCheckPw) {
  const pwCheck = () => {
    if (pwd.length === 0) return false;
    if (pwd.length >= 8 && pwd.length <= 16 && pwd === checkedPwd)
      return (
        <div className="text-primary sm:text-xs h-12 flex items-center">
          일치합니다!
        </div>
      );
    else {
      return (
        <div className="text-secondary text-xs h-12 flex items-center">
          일치하지 않습니다.
        </div>
      );
    }
  };
  return <div>{pwCheck()}</div>;
}
