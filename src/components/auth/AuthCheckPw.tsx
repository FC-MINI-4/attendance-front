import { IAuthCheckPw } from '@/types/IAuth';

// 비밀번호 확인 체크 컴포넌트
export default function AuthCheckPw({ pwd, checkedPwd }: IAuthCheckPw) {
  return (
    <div>
      {pwd === checkedPwd && pwd.length > 8 ? '비밀번호가 일치합니다.' : 'X'}
    </div>
  );
}
