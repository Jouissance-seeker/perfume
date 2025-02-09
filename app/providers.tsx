'use client';

import { AppProgressBar } from 'next-nprogress-bar';
import type { ReactNode } from 'react';
import { Suspense } from 'react';
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

export default function Providers({ children }: IProps) {
  return (
    <>
      <ProgressBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
}
