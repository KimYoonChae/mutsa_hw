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
        {[
          { icon: 'comment', count: 52, label: 'Messages', box: 'boxcon_1' },
          { icon: 'eye', count: 99, label: 'Views', box: 'boxcon_2' },
          { icon: 'share-alt', count: 23, label: 'Shares', box: 'boxcon_3' },
          { icon: 'users', count: 50, label: 'Users', box: 'boxcon_4' },
        ].map((item, idx) => (
          <div className="boxx" key={idx}>
            <div className={item.box}>
              <div className="icon"><i className={`fa fa-${item.icon}`}></i></div>
              <div className="count"><h3>{item.count}</h3></div>
              <h4>{item.label}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="panel">
        <div className="content-wrapper">
          <div className="region-section">
            <h5>Regions</h5>
            <img src={regionImage} alt="Google Regional Map" />
          </div>
          <div className="feeds-section">
            <h5>Feeds</h5>
            <table className="feedtable">
              <tbody>
                {[
                  ['user', 'New record, over 90 views.', '10 mins'],
                  ['bell', 'Database error.', '15 mins'],
                  ['users', 'New record, over 40 users.', '17 mins'],
                  ['comment', 'New comments.', '25 mins'],
                  ['bookmark', 'Check transactions.', '28 mins'],
                  ['laptop', 'CPU overload.', '35 mins'],
                  ['share-alt', 'New shares.', '39 mins'],
                ].map(([icon, text, time], idx) => (
                  <tr key={idx} className={idx % 2 === 1 ? 'backgray' : ''}>
                    <td><i className={`fa fa-${icon} ${icon}`}></i></td>
                    <td>{text}</td>
                    <td><i>{time}</i></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="statuscontainer">
        <h5>General Stats</h5>
        {[
          ['New Visitors', 'bar1', '+25%', '25%'],
          ['New Users', 'bar2', '50%', '50%'],
          ['Bounce Rate', 'bar3', '75%', '75%']
        ].map(([label, barClass, text, width], idx) => (
          <div key={idx}>
            <p>{label}</p>
            <div className="rate">
              <div className={barClass} style={{ width }}>{text}</div>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <div className="statuscontainer">
        <h5>Countries</h5>
        <table className="countrytable">
          <tbody>
            {[
              ['United States', '65%'],
              ['UK', '15.7%'],
              ['Russia', '5.6%'],
              ['Spain', '2.1%'],
              ['India', '1.9%'],
              ['France', '1.5%'],
            ].map(([country, rate], idx) => (
              <tr key={idx} className={idx % 2 === 1 ? 'backgray2' : 'country'}>
                <td className="left">{country}</td>
                <td className="right">{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <br />
        <button className="morebtn">More Countries &nbsp;<i className="fa fa-arrow-right"></i></button>
      </div>

      <hr />

      <div className="statuscontainer">
        <h5>Recent Users</h5>
        <ul className="card">
          {[avatar2, avatar5, avatar6].map((avatar, idx) => (
            <li className="cardpadding" key={idx}>
              <img src={avatar} className="cardmargin" alt={`User ${idx + 1}`} />
              <span className="w3-xlarge">{['Mike', 'Jill', 'Jane'][idx]}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="commentcontainer">
        <h5>Recent Comments</h5>
        {[{
          name: 'John',
          date: 'Sep 29, 2014, 9:12 PM',
          avatar: avatar3,
        }, {
          name: 'Bo',
          date: 'Sep 28, 2014, 10:15 PM',
          avatar: avatar1,
        }].map((comment, idx) => (
          <div className="row comment-row" key={idx}>
            <div className="center">
              <img className="circle" src={comment.avatar} alt={comment.name} />
            </div>
            <div className="john">
              <h4>{comment.name} <span className="johntext">{comment.date}</span></h4>
              <div className='pa'>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
          </div>
        ))}
      </div>

      <hr />

      <div className="footercon">
        <div className="row footer-row">
          {[
            { title: 'Demographic', class: 'foot1', items: ['Language', 'Country', 'City'] },
            { title: 'System', class: 'foot2', items: ['Browser', 'OS', 'More'] },
            { title: 'Target', class: 'foot3', items: ['Users', 'Active', 'Geo', 'Interests'] },
          ].map((section, idx) => (
            <div className="footerbox" key={idx}>
              <h5 className={section.class}>{section.title}</h5>
              {section.items.map((item, i) => <p key={i}>{item}</p>)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
