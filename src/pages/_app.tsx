import '@/pages/index.css';
import type { AppProps } from 'next/app';
import Layout from '@/components/common/Layout';


export default function App({ Component, pageProps, router }: AppProps) {
  //여기에 페이지주소 적으면 해당 페이지는 전역레이아웃사용하지않습니다.
  const specificPages = [
    '/main',
    '/admin-duty',
    '/admin-manage',
    '/admin-leave',
    '/admin-modify'
  ];
  const isSpecificPage = specificPages.includes(router.pathname);
  if (isSpecificPage) {
    return <Component {...pageProps} />;
  }

  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  );
}
