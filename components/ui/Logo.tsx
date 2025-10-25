import React from 'react';

export default function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="goldGradUi" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF1C2" />
          <stop offset="45%" stopColor="#E6C56E" />
          <stop offset="100%" stopColor="#B3842A" />
        </linearGradient>
        <radialGradient id="blueGlobeUi" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#183B73" />
          <stop offset="100%" stopColor="#0E2F63" />
        </radialGradient>
      </defs>
      <circle cx="64" cy="64" r="58" stroke="url(#goldGradUi)" strokeWidth="6" fill="none" opacity="0.95" />
      <circle cx="64" cy="64" r="52" stroke="url(#goldGradUi)" strokeWidth="2.5" fill="none" opacity="0.75" />
      <circle cx="64" cy="64" r="30" fill="url(#blueGlobeUi)" />
      <path d="M 64 49 A 15 15 0 0 1 64 79 A 7.5 7.5 0 0 0 64 64 A 7.5 7.5 0 0 1 64 49 Z" fill="url(#goldGradUi)" opacity="0.9" />
      <path d="M 64 49 A 15 15 0 0 0 64 79 A 7.5 7.5 0 0 1 64 64 A 7.5 7.5 0 0 0 64 49 Z" fill="#0E2F63" />
      <circle cx="64" cy="56.5" r="2.8" fill="#0E2F63" />
      <circle cx="64" cy="71.5" r="2.8" fill="url(#goldGradUi)" />
    </svg>
  );
}
