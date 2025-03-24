import React from 'react';
import avatar2 from '../images/avatar2.png';

function Sidebar({ isOpen, closeSidebar }) {
  return (
    <nav
      className={`w3-sidebar w3-collapse w3-white w3-animate-left ${isOpen ? 'w3-show' : ''}`}
      style={{
        zIndex: 3,
        width: '300px',
        position: 'fixed',
        left: 0,
        top: 0,
        height: '100vh',
        display: isOpen ? 'block' : 'none', // 상태에 따라 사이드바 보이게 설정
        
      }}
      id="mySidebar"
    >
      <br />
      <div className="w3-container w3-row"  style={{ marginTop: '50px' }}>
        <div className="w3-col s4">
          <img src={avatar2} className="w3-circle w3-margin-right" style={{ width: '46px' }} />
        </div>
        <div className="w3-col s8 w3-bar">
          <span>Welcome, <strong>Mike</strong></span>
          <br />
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-user"></i></a>
          <a href="#" className="w3-bar-item w3-button"><i className="fa fa-cog"></i></a>
        </div>
      </div>
      <hr />
      <div className="w3-container">
        <h5>Dashboard</h5>
      </div>
      <div className="w3-bar-block">
        <a href="#" className="w3-bar-item w3-button w3-padding-16 w3-hide-large w3-dark-grey w3-hover-black" onClick={closeSidebar} title="close menu">
          <i className="fa fa-remove fa-fw"></i>&nbsp; Close Menu
        </a>
        <a href="#" className="w3-bar-item w3-button w3-padding w3-blue"><i className="fa fa-users fa-fw"></i>&nbsp; Overview</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-eye fa-fw"></i>&nbsp; Views</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-users fa-fw"></i>&nbsp; Traffic</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bullseye fa-fw"></i>&nbsp; Geo</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-diamond fa-fw"></i>&nbsp; Orders</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bell fa-fw"></i>&nbsp; News</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-bank fa-fw"></i>&nbsp; General</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-history fa-fw"></i>&nbsp; History</a>
        <a href="#" className="w3-bar-item w3-button w3-padding"><i className="fa fa-cog fa-fw"></i>&nbsp; Settings</a>
      </div>
    </nav>
  );
}

export default Sidebar;
