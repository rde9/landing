import React from 'react';
import Link from 'next/link';
import { logoSvg } from '@/constants';
import { BlurInLogo } from './Animation';
import { categories } from '@/constants';

const Sidebar: React.FC = () => {
  return (
    <aside className="sticky top-0 flex min-h-screen w-sidebar flex-col justify-between p-body-margin">
      <div className="space-y-60">
        <Link href="/">
          <BlurInLogo key="logo" duration={0.6} delay={1.0 + 0.6 + (categories.length + 1) * 0.3}>
            <span dangerouslySetInnerHTML={{ __html: logoSvg }} />
          </BlurInLogo>
        </Link>
      </div>
      <div
        className="-m-8 size-48 self-center bg-cover bg-center"
        style={{
          backgroundImage: `url(/box.webp)`,
        }}
      ></div>
    </aside>
  );
};

export default Sidebar;
