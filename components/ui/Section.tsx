import React from 'react';

export default function Section({ className = '', children, as: Tag = 'section' as any }: { className?: string; children: React.ReactNode; as?: keyof JSX.IntrinsicElements }) {
  const Component: any = Tag;
  return <Component className={`relative ${className}`}>{children}</Component>;
}
