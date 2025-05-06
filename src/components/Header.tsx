import React from 'react';
import Link from 'next/link';
import { githubSvg, logoSvg, xSvg } from '@/constants';
import TypeWriter from './TypeWriter';

const links = [
  {
    href: 'https://github.com/rde9',
    ariaLabel: 'Github',
    icon: githubSvg,
  },
  {
    href: 'https://x.com/haru_nc_',
    ariaLabel: 'X',
    icon: xSvg,
  },
];

const SocialLinks: React.FC = () => {
  return (
    <ul className="flex items-center space-x-2 p-body-margin">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex size-8 items-center justify-center rounded-full border border-border-icon bg-bg p-5 transition-transform hover:scale-110"
            aria-label={link.ariaLabel}
          >
            <span dangerouslySetInnerHTML={{ __html: link.icon }} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-border-light">
      <div className="flex items-center justify-between p-body-margin md:hidden">
        <div className="w-[208px] p-body-margin">
          <Link href="/">
            <span dangerouslySetInnerHTML={{ __html: logoSvg }} />
          </Link>
        </div>

        <SocialLinks />
      </div>

      <div className="hidden w-full items-center justify-between md:flex">
        <span className="flex items-center p-body-margin text-small">
          <TypeWriter />
        </span>

        <SocialLinks />
      </div>
    </header>
  );
};

export default Header;
