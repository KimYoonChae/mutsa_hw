import React from 'react';
import styles from "../styles/sidebar.module.css"; 
import avatar2 from '../images/avatar2.png';
function Sidebar({ isOpen, closeSidebar, isMobile }) {
  return (
    <nav
      className={`${styles.sidebar} w3-sidebar w3-collapse w3-white w3-animate-left ${isOpen ? 'open' : ''}`} 
      id="mySidebar"
      style={{ display: isOpen ? 'block' : 'none' }} 
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
        <div className={styles.w3}>
          <i className="fa fa-envelope"></i> 
          <i className="fa fa-user"></i>
          <i className="fa fa-cog"></i>
        </div>
        <hr />
        <div className={styles.dashboard}>
          Dashboard
        </div>

      
        {isMobile && (
          <a 
            className={styles.closebtn} 
            onClick={closeSidebar}
            title="close menu"
          >
            <i className="fa fa-remove fa-fw"></i>&nbsp; Close Menu
          </a>
        )}

        <div className={styles.w3BarItems}>
          <div className={styles.selectedItem}>
            <i className="fa fa-users fa-fw"></i>&nbsp; Overview
          </div>
          <div className={styles.w3BarItem}>
            <i className="fa fa-eye fa-fw"></i>&nbsp; Views
          </div>
          <div className={styles.w3BarItem}>
            <i className="fa fa-users fa-fw"></i>&nbsp; Traffic
          </div>
          <div className={styles.w3BarItem}>
            <i className="fa fa-bullseye fa-fw"></i>&nbsp; Geo
          </div>
          <div className={styles.w3BarItem}>
            <i className="fa fa-diamond fa-fw"></i>&nbsp; Orders
          </div>
          <div className={styles.w3BarItem}>
            <i className="fa fa-bell fa-fw"></i>&nbsp; News
          </div>
          <div className={styles.w3BarItem}>
            <i className="fa fa-bank fa-fw"></i>&nbsp; General
          </div>
          <div className={styles.w3BarItem}>
            <i className="fa fa-history fa-fw"></i>&nbsp; History
          </div>
          <div className={styles.w3BarItem}>
            <i className="fa fa-cog fa-fw"></i>&nbsp; Settings
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
