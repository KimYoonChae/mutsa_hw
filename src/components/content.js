// Content.js
import React from 'react';
import '../styles/content.css';
import regionImage from '../images/region.png'; // 이미지를 임포트
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar5 from '../images/avatar5.png';
import avatar6 from '../images/avatar6.png';

function Content() {
  return (
    <div className="w3-main" style={{ marginLeft: '300px', marginTop: '43px' }}>
      <header className="container" style={{paddingTop: '22px'}}>
 <div><i className="fa fa-dashboard"></i> My Dashboard</div>
</header>


    </div>
  );
}

export default Content;