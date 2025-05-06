import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, href, className = '', onClick }) => {
  const baseClasses =
    'inline-block border border-current rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-fg hover:text-bg';
  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
