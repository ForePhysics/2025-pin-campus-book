import React, { FC, ReactNode } from 'react';
import FloatingTab from './FloatingTab';
import '../styles/global.scss';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <main className="container">
        {children}
      </main>
      <FloatingTab />
      <div className="powered-by">Powered by InterStudio by love❤️</div>
    </div>
  );
};

export default Layout;
