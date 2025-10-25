import Link from 'next/link';
import React from 'react';

type ButtonBaseProps = {
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = ButtonBaseProps & {
  href: string;
  variant?: 'primary' | 'outline';
};

export function ButtonLink({ href, variant = 'primary', className = '', children }: AnchorProps) {
  const classes = `${variant === 'primary' ? 'btn-primary' : 'btn-outline'} ${className}`;
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function Button({ className = '', children, ...rest }: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `btn-primary ${className}`;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
