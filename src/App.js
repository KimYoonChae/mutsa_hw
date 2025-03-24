import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  // 사이드바 열기/닫기 토글 함수
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="App" style={{ backgroundColor: '#f0f0f0' }}>
      <div className="w3-bar w3-top w3-black w3-large" style={{ zIndex: 4 }}>
        <button
          className="w3-bar-item w3-button w3-hide-large w3-hover-none w3-hover-text-light-grey"
          onClick={toggleSidebar} // 토글 함수로 변경
        >
          <i className="fa fa-bars"></i> &nbsp;Menu
        </button>
        <span className="w3-bar-item w3-right">Logo</span>
      </div>

      <Sidebar isOpen={isOpen} closeSidebar={toggleSidebar} /> {/* 사이드바에도 토글 함수 전달 */}

      {isOpen && (
        <div
          className="w3-overlay w3-animate-opacity"
          onClick={toggleSidebar} // 클릭 시에도 사이드바 토글
          style={{
            cursor: 'pointer',
            display: 'block', // 오버레이 항상 표시
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2,
         
          }}
          title="close side menu"
          id="myOverlay"
        />
      )}

      <Content />
    </div>
  );
}

export default App;
