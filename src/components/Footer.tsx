import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-wrap justify-between border-t border-border-light">
      <div className="flex items-center space-x-2 p-body-margin">
        <p>© 2021 - {currentYear}</p>
        <p className="font-medium">
          <Link href="https://github.com/rde9" target="_blank">
            rde9
          </Link>
        </p>
      </div>

      <div className="p-body-margin text-fg-secondary">
        <span>
          Inspired by
          <span className="hidden md:inline"> WordPress theme</span>{' '}
          <Link
            href="https://hideo.andersnoren.se"
            className="transition-colors hover:text-fg"
            target="_blank"
            rel="noreferrer"
          >
            Hideo
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
