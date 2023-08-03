import Input from '@/components/common/Input';

export default function AuthFindPwInput() {
  const onClick = () => {};
  return (
    <div className="sm:mb-16">
      <Input
        label={'이메일'}
        name={'email'}
        onChange={onClick}
        placeholder={'예: jindojoon@soonyang.com'}
      />
    </div>
  );
}
