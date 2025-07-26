import { Header } from '@components';
import { Suspense } from 'react';
import { Loader } from '@UI';
import { Toaster } from 'react-hot-toast';

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>{children}</Suspense>
      <Toaster />
    </>
  );
};
