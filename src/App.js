import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
   //원래 기본은 사이드바가 열려있어야(TRUE) 하고, 화면이 992px 미만이면 모바일(true)
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 992); //사이드바가 열렸는지 닫혔는지 제어함
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992); //화면이 992보다 작은지 여부
  const toggleSidebar = () => setIsOpen(prevState => !prevState); //메뉴 버튼 눌렀을때 화면 닫히고 열리게 하기
  //prevState는 이전상태를 의미한다.


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      setIsOpen(window.innerWidth >= 992); // 992보다 크면 자동으로 사이드열기
    };
  
    window.addEventListener('resize', handleResize); //컨포넌트가 없어질때 resize 이벤트 리스너도 없애서 메모리 누수 막기
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ backgroundColor: '#f0f0f0' }}>
      <div className="header">
        {isMobile && (
          <button className="menubtn" onClick={toggleSidebar}>
            <i className="fa fa-bars"></i> &nbsp;Menu
          </button>
        )} {/*992보다 화면이 작을때 메뉴 버튼이 나오게 한다. */}
        <span className="logo">Logo</span>
      </div>

      <Sidebar isOpen={isOpen} closeSidebar={toggleSidebar} isMobile={isMobile} />
      {/*props로 사이드바.js에 상태를 넘겨주기 */}
      <Content />
    </div>
  );
}

export default App;
