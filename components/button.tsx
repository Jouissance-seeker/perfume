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
        'transition-all px-3 py-2 rounded-md text-smp',
        {
          'bg-white border border-white text-blue-300 hover:text-white hover:bg-blue-300':
            props.variant === 'white',
          'bg-blue-300 border border-blue-300 text-white hover:text-blue-300 hover:bg-white':
            props.variant === 'blue',
          'bg-brown-100 text-brown-300 border border-brown-100 hover:bg-white hover:border-brown-200':
            props.variant === 'brown',
        },
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};
