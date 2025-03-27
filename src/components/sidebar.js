import React from 'react';
import styles from "../styles/sidebar.module.css"; 
import avatar2 from '../images/avatar2.png';

// isOpen, closeSidebar, isMobile <- app.js로부터 받아온 상태들
function Sidebar({ isOpen, closeSidebar, isMobile }) {
  return (
    <nav
      className={`${styles.sidebar} ${isOpen ? 'open' : ''}`} 
      style={{ display: isOpen ? 'block' : 'none' }} //isopen이 false면 none으로 처리해서 화면에서 없애기
    >
      <div className={styles.sidebarWrapper}>
        <img 
          src={avatar2} 
          className={styles.avatar}
          alt="Avatar"
        />
        <div className={styles.welcome}>
          Welcome, <span style={{ fontWeight: "bold" }}>Mike</span>
        </div>
        <div className={styles.topIcons}>
          <i className="fa fa-envelope"></i> 
          <i className="fa fa-user"></i>
          <i className="fa fa-cog"></i>
        </div>
        <hr />
        <div className={styles.dashboard}>
          Dashboard
        </div>
 
      {/*모바일 버전일때만 클로즈 버튼 보이게 하기 */}
        {isMobile && (
          <a 
            className={styles.closebtn} 
            onClick={closeSidebar}
            title="close menu"
          >
            <i className="fa fa-remove fa-fw"></i>&nbsp; Close Menu
          </a>
        )}

        <div className={styles.Items}>
          <div className={styles.selectedItem}>
            <i className="fa fa-users fa-fw"></i>&nbsp; Overview
          </div>
          <div className={styles.Item}>
            <i className="fa fa-eye fa-fw"></i>&nbsp; Views
          </div>
          <div className={styles.Item}>
            <i className="fa fa-users fa-fw"></i>&nbsp; Traffic
          </div>
          <div className={styles.Item}>
            <i className="fa fa-bullseye fa-fw"></i>&nbsp; Geo
          </div>
          <div className={styles.Item}>
            <i className="fa fa-diamond fa-fw"></i>&nbsp; Orders
          </div>
          <div className={styles.Item}>
            <i className="fa fa-bell fa-fw"></i>&nbsp; News
          </div>
          <div className={styles.Item}>
            <i className="fa fa-bank fa-fw"></i>&nbsp; General
          </div>
          <div className={styles.Item}>
            <i className="fa fa-history fa-fw"></i>&nbsp; History
          </div>
          <div className={styles.Item}>
            <i className="fa fa-cog fa-fw"></i>&nbsp; Settings
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
