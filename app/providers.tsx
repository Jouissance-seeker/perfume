'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Loader } from '@/components/loader';

interface IProps {
  children: ReactNode;
}

const ProgressBar = () => {
  return (
    <AppProgressBar
      height="4px"
      color="#102C57"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};

const Toast = () => {
  return <Toaster />;
};

export default function Providers({ children }: IProps) {
  return (
    <>
      <ProgressBar />
      <Toast />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
}
