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
<div className="statuscontainer">
   <h5>General Stats</h5>
   <p>New Visitors</p>
   <div className="rate">
     <div className="bar1" style={{ width: '25%' }}>+25%</div>
   </div>
 
   <p>New Users</p>
   <div className="rate">
     <div className="bar2" style={{ width: '50%' }}>50%</div>
   </div>
 
   <p>Bounce Rate</p>
   <div className="rate">
     <div className="bar3" style={{ width: '75%' }}>75%</div>
   </div>
 </div>

 <div className="w3-container">
   <h5>Countries</h5>
   <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
     <tr className="c">
       <td>United States</td>
       <td>65%</td>
     </tr>
     <tr className="backgray2">
       <td>UK</td>
       <td>15.7%</td>
     </tr>
     <tr className="c">
       <td>Russia</td>
       <td>5.6%</td>
     </tr>
     <tr className="backgray2">
       <td>Spain</td>
       <td>2.1%</td>
     </tr>
     <tr className="c">
       <td>India</td>
       <td>1.9%</td>
     </tr>
     <tr className="backgray2">
       <td>France</td>
       <td>1.5%</td>
     </tr>
   </table>
   <br />
   <button className="w3-button w3-dark-grey">More Countries &nbsp;<i className="fa fa-arrow-right"></i></button>
 </div>





    </div>
  );
}

export default Content;
