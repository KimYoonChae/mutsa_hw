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

      <div className="panel">
  <div className="content-wrapper">
    <div className="region-section">
      <h5>Regions</h5>
      <img src={regionImage} style={{ width: '100%' }} alt="Google Regional Map" />
    </div>
    <div className="feeds-section">
      <h5>Feeds</h5>
      <table className="feedtable">
        <tbody>
          <tr>
            <td><i className="fa fa-user user"></i></td>
            <td>New record, over 90 views.</td>
            <td><i>10 mins</i></td>
          </tr>
          <tr className="backgray">
            <td><i className="fa fa-bell bell"></i></td>
            <td>Database error.</td>
            <td><i>15 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-users users"></i></td>
            <td>New record, over 40 users.</td>
            <td><i>17 mins</i></td>
          </tr>
          <tr className="backgray">
            <td><i className="fa fa-comment comment"></i></td>
            <td>New comments.</td>
            <td><i>25 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-bookmark bookmark"></i></td>
            <td>Check transactions.</td>
            <td><i>28 mins</i></td>
          </tr>
          <tr className="backgray">
            <td><i className="fa fa-laptop comment"></i></td>
            <td>CPU overload.</td>
            <td><i>35 mins</i></td>
          </tr>
          <tr>
            <td><i className="fa fa-share-alt share"></i></td>
            <td>New shares.</td>
            <td><i>39 mins</i></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>

    </div>
  );
}

export default Content;
