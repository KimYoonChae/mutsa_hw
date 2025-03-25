import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 992); // 992px 이상이면 열림
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992); // 모바일 여부 판단

  const toggleSidebar = () => setIsOpen(prevState => !prevState); // 사이드바 열고 닫기

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) {
        setIsOpen(true); // 992px 이상에서는 항상 열림
        setIsMobile(false);
      } else {
        setIsOpen(false); // 992px 미만에서는 닫힘
        setIsMobile(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <div className="header">
        {isMobile && ( // 992px 미만일 때만 버튼 표시
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
          onClick={toggleSidebar} // 오버레이 클릭 시 사이드바 닫히도록
        />
      )}

      <Content />
    </div>
  );
}

export default App;
