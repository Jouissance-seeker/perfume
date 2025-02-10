'use client';

import { cn } from '@/utils/cn';

interface IButtonProps {
  className?: string;
  variant: 'blue' | 'brown' | 'white';
  children: React.ReactNode;
}

export const Button = (props: IButtonProps) => {
  return (
    <button
      className={cn(
        'transition-all px-3 py-2 rounded-md text-smp font-light',
        {
          'bg-white border border-white text-blue hover:text-white hover:bg-blue':
            props.variant === 'white',
          'bg-blue border border-blue text-white hover:text-blue hover:bg-white':
            props.variant === 'blue',
          'bg-brown text-blue border border-brown hover:bg-white':
            props.variant === 'brown',
        },
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};
