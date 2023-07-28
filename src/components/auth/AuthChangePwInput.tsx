import Input from '@/components/common/Input';

export default function AuthChangePwInput() {
  const onClick = () => {};
  return (
    <div>
      <div className="sm:mb-4 flex mb-4">
        <Input
          label={'새로운 비밀번호'}
          name={'email'}
          onChange={onClick}
          placeholder={'영문+숫자, 8자리 이상 16자리 이하'}
          type="password"
        />
        <div className="sm:min-w-[5rem] min-w-[3rem] sm:mt-9 sm:ml-4">
          check
        </div>
      </div>

      <div className="sm:mb-16 flex mb-8">
        <Input
          label={'비밀번호 확인'}
          name={'email'}
          onChange={onClick}
          placeholder={'비밀번호를 한번 더 입력해주세요.'}
          type="password"
        />
        <div className="sm:min-w-[5rem] min-w-[3rem] sm:mt-9 sm:ml-4">
          check
        </div>
      </div>
    </div>
  );
}
