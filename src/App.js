import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 992);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  const toggleSidebar = () => setIsOpen(prevState => !prevState);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsOpen(true);
        setIsMobile(false);
      } else {
        setIsOpen(false);
        setIsMobile(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <div className="header">
        {isMobile && (
          <button className="menubtn" onClick={toggleSidebar}>
            <i className="fa fa-bars"></i> &nbsp;Menu
          </button>
        )}
        <span className="logo">Logo</span>
      </div>

      <Sidebar isOpen={isOpen} closeSidebar={toggleSidebar} isMobile={isMobile} />

      {isOpen && isMobile && (
        <div
          className="overlay"
          onClick={toggleSidebar}
        />
      )}

      <Content />
    </div>
  );
}

export default App;
