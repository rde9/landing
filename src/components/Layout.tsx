import React from 'react';
import Header from './Header';
import HeaderMobile from './HeaderMobile';
import Sidebar from './Sidebar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-col md:hidden">
        <Header />
        <HeaderMobile />
        <main>{children}</main>
        <Footer />
      </div>

      <div className="hidden w-full md:flex">
        <div className="w-sidebar border-r border-border-light">
          <Sidebar />
        </div>

        <div className="flex flex-1 flex-col">
          <Header />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
