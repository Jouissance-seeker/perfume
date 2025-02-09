import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';
import { Template } from '@/containers';
import { cn } from '@/utils/cn';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'پرفیوم',
  description: 'توسعه دهنده : حمید شاهسونی',
};

const dana = localFont({
  src: [
    {
      path: '../public/fonts/dana/light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/dana/medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/dana/semi-bold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-dana',
});

const pelak = localFont({
  src: [
    {
      path: '../public/fonts/pelak/light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/pelak/regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/pelak/medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/pelak/semi-bold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/pelak/bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-pelak',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      dir="rtl"
      className="scrollbar-hide"
      lang="fa"
    >
      <body className={cn(pelak.variable, dana.variable)}>
        <Providers>
          <Template>{children}</Template>
        </Providers>
      </body>
    </html>
  );
}
