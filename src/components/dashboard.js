import React from "react";
import styles from "../styles/Dashboard.module.css";  // 스타일 불러오기

const Dashboard = () => {
  return (
    <div>
      <header className={styles.customBox}>
        <h5>
          <b>
            <i className="fa fa-dashboard"></i> My Dashboard
          </b>
        </h5>
      </header>

      <div className={styles.w3RowPadding}>
        <div className={styles.w3Quarter}>
          <div className={`${styles.w3Container} ${styles.w3Red} ${styles.w3Padding16}`}>
            <div className={styles.w3Left}>
              <i className="fa fa-comment ${styles.w3Xxlarge}"></i>
            </div>
            <div className={styles.w3Right}>
              <h3>52</h3>
            </div>
            <div className={styles.w3Clear}></div>
            <h4>Messages</h4>
          </div>
        </div>

        <div className={styles.w3Quarter}>
          <div className={`${styles.w3Container} ${styles.w3Blue} ${styles.w3Padding16}`}>
            <div className={styles.w3Left}>
              <i className="fa fa-eye ${styles.w3Xxlarge}"></i>
            </div>
            <div className={styles.w3Right}>
              <h3>99</h3>
            </div>
            <div className={styles.w3Clear}></div>
            <h4>Views</h4>
          </div>
        </div>

        <div className={styles.w3Quarter}>
          <div className={`${styles.w3Container} ${styles.w3Teal} ${styles.w3Padding16}`}>
            <div className={styles.w3Left}>
              <i className="fa fa-share-alt ${styles.w3Xxlarge}"></i>
            </div>
            <div className={styles.w3Right}>
              <h3>23</h3>
            </div>
            <div className={styles.w3Clear}></div>
            <h4>Shares</h4>
          </div>
        </div>

        <div className={styles.w3Quarter}>
          <div className={`${styles.w3Container} ${styles.w3Orange} ${styles.w3TextWhite} ${styles.w3Padding16}`}>
            <div className={styles.w3Left}>
              <i className="fa fa-users ${styles.w3Xxlarge}"></i>
            </div>
            <div className={styles.w3Right}>
              <h3>50</h3>
            </div>
            <div className={styles.w3Clear}></div>
            <h4>Users</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
