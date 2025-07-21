import React, { FC, useState, useEffect } from 'react';
import { Link } from 'gatsby';

interface TabItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

const FloatingTab: FC = () => {
  const [currentPath, setCurrentPath] = useState('/');
  
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);
  
  const tabItems: TabItem[] = [
    {
      path: '/',
      label: '首页',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
          <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>
      )
    },
    {
      path: 'https://2025pincampus.interstudio.design/', 
      label: '论坛',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 15h8M8 12h8M8 9h8"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="floating-tab">
      <div className="floating-tab-container">
        {tabItems.map((item) => {
          const isActive = currentPath === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`floating-tab-item ${isActive ? 'active' : ''}`}
            >
              <div className="tab-icon">{item.icon}</div>
              <span className="tab-label">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingTab; 