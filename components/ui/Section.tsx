import React from 'react';

type SectionProps<T extends React.ElementType = 'section'> = {
  className?: string;
  children: React.ReactNode;
  as?: T;
};

export default function Section<T extends React.ElementType = 'section'>({
  className = '',
  children,
  as,
  ...rest
}: SectionProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof SectionProps<T>>) {
  const Component = as || 'section';
  return (
    <Component className={`relative ${className}`} {...rest}>
      {children}
    </Component>
  );
}
