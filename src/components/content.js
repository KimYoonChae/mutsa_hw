import React from 'react';
import '../styles/content.css';
import regionImage from '../images/region.png';

function Content() {
  return (
    <div className="main">
      <div className="maincontainer">
        <div><i className="fa fa-dashboard"></i> My Dashboard</div>
      </div>
      <div className="tabs">
        <div className="boxx">
          <div className="boxcon_1">
            <div><i className="fa fa-comment"></i></div>
            <div>
              <h3>52</h3>
            </div>
            <h4>Messages</h4>
          </div>
        </div>
        <div className="boxx">
          <div className="boxcon_2">
            <div><i className="fa fa-eye"></i></div>
            <div>
              <h3>99</h3>
            </div>
            <h4>Views</h4>
          </div>
        </div>
        <div className="boxx">
          <div className="boxcon_3">
            <div><i className="fa fa-share-alt"></i></div>
            <div>
              <h3>23</h3>
            </div>
            <h4>Shares</h4>
          </div>
        </div>
        <div className="boxx">
          <div className="boxcon_4">
            <div><i className="fa fa-users"></i></div>
            <div>
              <h3>50</h3>
            </div>
            <h4>Users</h4>
          </div>
        </div>
      </div>

      <div className="regionwrap">
        <div className="region">
          <div className="regiontitle">Regions</div>
          <img src={regionImage} className="regionpng" alt="Google Regional Map" />
        </div>

        <div className="feeds">
          <div className="feedtitle">Feeds</div>
          <div className="feedlist">
            <div className="feedcard"><i className="fa fa-user"></i> New record, over 90 views. <span>10 mins ago</span></div>
            <div className="feedcard"><i className="fa fa-bell"></i> Database error. <span>15 mins ago</span></div>
            <div className="feedcard"><i className="fa fa-users"></i> New record, over 40 users. <span>17 mins ago</span></div>
            <div className="feedcard"><i className="fa fa-comment"></i> New comments. <span>25 mins ago</span></div>
            <div className="feedcard"><i className="fa fa-bookmark"></i> Check transactions. <span>28 mins ago</span></div>
            <div className="feedcard"><i className="fa fa-laptop"></i> CPU overload. <span>35 mins ago</span></div>
            <div className="feedcard"><i className="fa fa-share-alt"></i> New shares. <span>39 mins ago</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
