import React, { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className = '' }) => {
  return (
    <a 
      href={href} 
      className={`${className} transition duration-200`}
    >
      {children}
    </a>
  );
};