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
      <div 
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '10px',
          fontSize: '12px',
          color: '#666',
          zIndex: 1000,
          fontFamily: 'Arial, sans-serif'
        }}
      >
        Powered by InterStudio by love❤️
      </div>
    </div>
  );
};

export default Layout;
