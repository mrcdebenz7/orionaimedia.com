import React from 'react';

export default function Container({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={`container-edge ${className}`}>{children}</div>;
}
