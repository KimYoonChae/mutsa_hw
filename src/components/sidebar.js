import React from "react";
import avatarImage from "../images/avatar2.png";  // 이미지 경로
import styles from "../styles/sidebar.module.css";  // 스타일 불러오기

const Sidebar = () => {
  return (
    <div className={styles.sidebarWrapper}>
      <img 
        src={avatarImage}  // import한 이미지 사용
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
        <i class="fa fa-bell fa-fw"></i>&nbsp; News
        </div>
        <div className={styles.w3BarItem}>
        <i class="fa fa-bank fa-fw"></i>&nbsp; General
        </div>
        <div className={styles.w3BarItem}>
        <i class="fa fa-history fa-fw"></i>&nbsp; History
        </div>
        <div className={styles.w3BarItem}>
        <i class="fa fa-cog fa-fw"></i>&nbsp; Settings
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;
