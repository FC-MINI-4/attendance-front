import Button from '@/components/common/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/signin">Go to Sign-In</Link>
      <Link href='/main'>Go to Main</Link>
      <Button contents={'확인'} secondary></Button>
      <br />
      <Button contents={'확인'} disabled></Button>
      <br />
      <Button contents={'확인'} submit></Button>
      <br />
      <Button contents={'확인'}></Button>
    </div>
  );
}
