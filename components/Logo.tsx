import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 100" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="4"
    >
      {/* Mortarboard (Graduation Cap) */}
      <path 
        d="M10 40 L50 20 L90 40 L50 60 Z" 
        fill="currentColor" 
        stroke="none"
      />
      <path 
        d="M20 45 L20 70 C20 70, 50 85, 80 70 L80 45" 
        fill="currentColor" 
        stroke="none"
      />
      <line x1="85" y1="40" x2="85" y2="75" strokeWidth="3" />
      <rect x="82" y="75" width="6" height="6" rx="2" fill="currentColor" stroke="none" />

      {/* Wi-Fi Symbol */}
      <g transform="translate(50, 85)" stroke="orange" strokeWidth="5" strokeLinecap="round">
        <path d="M-20 0 A 20 20 0 0 1 20 0" />
        <path d="M-30 -5 A 30 30 0 0 1 30 -5" />
        <circle cx="0" cy="5" r="3" fill="orange" stroke="none" />
      </g>
    </svg>
  );
};

export default Logo;
