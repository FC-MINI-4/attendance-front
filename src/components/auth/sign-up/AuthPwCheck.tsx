import { IRegexCheck } from '@/types/ISignUp';

export default function AuthPwCheck({ valid }: IRegexCheck) {
  const validMessage = () => {
    if (!valid) {
      return (
        <div className="text-secondary text-xs ml-1">
          영문, 숫자를 조합하여 입력해주세요. (8-16자)
        </div>
      );
    }
  };
  return <div>{validMessage()}</div>;
}
