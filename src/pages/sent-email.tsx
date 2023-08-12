import AuthLayout from '@/components/auth/AuthLayout';
import AuthSentEmailBox from '@/components/auth/find-pw/AuthSentEmailBox';

export default function sentEmail() {
  return (
    <AuthLayout>
      <AuthSentEmailBox />
    </AuthLayout>
  );
}
