'use client';

import { cn } from '@/utils/cn';

interface IButtonProps {
  className?: string;
  variant: 'oxford' | 'seashell' | 'white';
  children: React.ReactNode;
}

export const Button = (props: IButtonProps) => {
  return (
    <button
      className={cn(
        'transition-all',
        {
          'bg-white border border-white text-oxford hover:text-white hover:bg-oxford':
            props.variant === 'white',
          'bg-oxford border border-oxford text-white hover:text-oxford hover:bg-white':
            props.variant === 'oxford',
          'bg-seashell text-oxford border border-seashell hover:bg-white':
            props.variant === 'seashell',
        },
        props.className,
      )}
    >
      {props.children}
    </button>
  );
};
