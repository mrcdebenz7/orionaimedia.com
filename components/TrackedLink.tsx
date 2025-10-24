'use client';

import Link, { LinkProps } from 'next/link';
import { track } from '@/lib/track';
import { PropsWithChildren } from 'react';

type TrackedLinkProps = PropsWithChildren<{
  cta: string;
  className?: string;
}> & LinkProps;

export default function TrackedLink({ cta, className, children, ...linkProps }: TrackedLinkProps) {
  return (
    <Link
      {...linkProps}
      className={className}
      onClick={() => track('cta_click', { cta })}
    >
      {children}
    </Link>
  );
}
