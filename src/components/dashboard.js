import React from "react";
import styled from "styled-components";

const Dashwrapper = styled.div`
  position: fixed;
  top:80px;
  left: 300px;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: "Raleway", sans-serif;

  @media (max-width: 992px) {
 position: fixed;
  top:80px;
  left: 100px;
    transform: translateX(-50%);
  }
`;

const Dashicon = styled.i`
  color: black;
  font-size: 24px;
  margin-right: 10px;
`;

const Mydash = styled.div`
  color: black;
  font-weight: bolder;
`;

const Dashboard = () => {
  return (
    <Dashwrapper>
      <Dashicon className="fa fa-dashboard" />
      <Mydash>My Dashboard</Mydash>
    </Dashwrapper>
  );
};

export default Dashboard;
