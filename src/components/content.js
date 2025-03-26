import React from 'react';
import '../styles/content.css';
import regionImage from '../images/region.png';
import avatar1 from '../images/avatar1.png';
import avatar2 from '../images/avatar2.png';
import avatar3 from '../images/avatar3.png';
import avatar5 from '../images/avatar5.png';
import avatar6 from '../images/avatar6.png';

function Content() {
  return (
    <div className="main">
     <div className="maincontainer">
  <div><i className="fa fa-dashboard"></i> My Dashboard</div>
</div>
<div className="tabs">
  <div className="boxx">
    <div className="boxcon_1">
      <div className="icon"><i className="fa fa-comment"></i></div>
      <div className="count">
        <h3>52</h3>
      </div>
      <h4>Messages</h4>
    </div>
  </div>
  <div className="boxx">
    <div className="boxcon_2">
      <div className="icon"><i className="fa fa-eye"></i></div>
      <div className="count">
        <h3>99</h3>
      </div>
      <h4>Views</h4>
    </div>
  </div>
  <div className="boxx">
    <div className="boxcon_3">
      <div className="icon"><i className="fa fa-share-alt"></i></div>
      <div className="count">
        <h3>23</h3>
      </div>
      <h4>Shares</h4>
    </div>
  </div>
  <div className="boxx">
    <div className="boxcon_4">
      <div className="icon"><i className="fa fa-users"></i></div>
      <div className="count">
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
      <hr />
      <div className="statuscontainer">
        <h5>Countries</h5>
        <table className="countrytable">
          <tbody>
            <tr className="country">
              <td className="left">United States</td>
              <td className="right">65%</td>
            </tr>
            <tr className="backgray2">
              <td className="left">UK</td>
              <td className="right">15.7%</td>
            </tr>
            <tr className="country">
              <td className="left">Russia</td>
              <td className="right">5.6%</td>
            </tr>
            <tr className="backgray2">
              <td className="left">Spain</td>
              <td className="right">2.1%</td>
            </tr>
            <tr className="country">
              <td className="left">India</td>
              <td className="right">1.9%</td>
            </tr>
            <tr className="backgray2">
              <td className="left">France</td>
              <td className="right">1.5%</td>
            </tr>
          </tbody>
        </table>
        <br />
        <button className="morebtn">More Countries &nbsp;<i className="fa fa-arrow-right"></i></button>
      </div>
      <hr />
      <div className="statuscontainer">
        <h5>Recent Users</h5>
        <ul className="card">
          <li className="cardpadding">
            <img src={avatar2} className="cardmargin" style={{ width: '35px' }} />
            <span className="w3-xlarge">Mike</span><br />
          </li>
          <li className="cardpadding">
            <img src={avatar5} className="cardmargin" style={{ width: '35px' }} />
            <span className="w3-xlarge">Jill</span><br />
          </li>
          <li className="cardpadding">
            <img src={avatar6} className="cardmargin" style={{ width: '35px' }} />
            <span className="w3-xlarge">Jane</span><br />
          </li>
        </ul>
      </div>
      <div className="statuscontainer">

        <h5>Recent Comments</h5>

        <div className="row">
          <div className="center">
            <img className="circle" src={avatar3} style={{ width: '96px', height: '96px' }} />
          </div>
          <div className="john">
            <h4>John <span className="johntext">Sep 29, 2014, 9:12 PM</span></h4>
            <div className='pa'>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><br />
          </div>
        </div>

        <div className="row">
          <div className="center">
            <img className="circle" src={avatar1} style={{ width: '96px', height: '96px' }} />
          </div>
          <div className="john">
            <h4>Bo <span className="johntext">Sep 28, 2014, 10:15 PM</span></h4>
            <div className='pa'>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div><br />
          </div>
        </div>
        
      </div>
      <hr/>

      <div className="footercon">
        <div className="row">
          <div className="footerbox">
            <h5 className="foot1">Demographic</h5>
            <p>Language</p>
            <p>Country</p>
            <p>City</p>
          </div>
          <div className="footerbox">
            <h5 className="foot2">System</h5>
            <p>Browser</p>
            <p>OS</p>
            <p>More</p>
          </div>
          <div className="footerbox">
            <h5 className="foot3">Target</h5>
            <p>Users</p>
            <p>Active</p>
            <p>Geo</p>
            <p>Interests</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
