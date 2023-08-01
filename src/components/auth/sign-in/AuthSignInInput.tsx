import Input from '@/components/common/Input';

export default function AuthSignInInput() {
  const onClick = () => {};

  return (
    <>
      <div className="sm:mb-4">
        <Input
          label={'이메일'}
          name={'email'}
          onChange={onClick}
          placeholder={'예: jinyangchul@soonyang.com'}
          type="email"
        />
      </div>
      <div className="sm:mb-16">
        <Input
          label={'비밀번호'}
          name={'password'}
          onChange={onClick}
          placeholder={'영문+숫자, 8자리 이상 16자리 이하'}
          type="password"
        />
      </div>
    </>
  );
}
