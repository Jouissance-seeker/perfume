'use client';

import { ReactNode } from 'react';
import { Footer } from './footer';
import { Header } from './header';

interface IBaseProps {
  children: ReactNode;
}

export function Base(props: IBaseProps) {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
