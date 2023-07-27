import { IAuthCheckPw } from '@/types/IAuth';

// 비밀번호 확인 체크 컴포넌트
export default function AuthCheckPw({ pwd, checkedPwd }: IAuthCheckPw) {
  return <div>{pwd === checkedPwd ? 'O' : 'X'}</div>;
}
