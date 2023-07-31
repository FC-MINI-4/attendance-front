import { IRegexCheck } from '@/types/ISignUp';

export default function AuthEmailCheck({ valid }: IRegexCheck) {
  const validMessage = () => {
    if (!valid) {
      return (
        <div className="text-secondary text-xs ml-1">
          이메일 주소를 정확히 입력해주세요.
        </div>
      );
    }
  };
  return <div>{validMessage()}</div>;
}
