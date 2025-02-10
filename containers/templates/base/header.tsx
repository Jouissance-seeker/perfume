import { ShoppingCart, User } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/button';

export function Header() {
  return (
    <header className="container">
      <Mobile />
      <Desktop />
    </header>
  );
}

const Mobile = () => {
  return (
    <div className="flex items-center justify-between py-5 lg:hidden">
      <Link href="/cart">
        <ShoppingCart variant="Bold" size="28" className="fill-blue-300" />
      </Link>
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={120} height={120} />
      </Link>
      <Link href="/auth">
        <User size="28" className="fill-blue-300" />
      </Link>
    </div>
  );
};

const Desktop = () => {
  return (
    <div className="hidden items-center justify-between py-5 lg:flex">
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={120} height={120} />
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/cart">
          <ShoppingCart variant="Bold" size="30" className="fill-blue-300" />
        </Link>
        <Link href="/auth">
          <Button variant="blue">ورود / ثبت نام</Button>
        </Link>
      </div>
    </div>
  );
};
