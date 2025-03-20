import React from 'react';
import styled from 'styled-components';
import Header from "./header";


const Background = styled.div`
  background-color: #f1f1f1;
  color: black;
  position: fixed;
  width: 100%;
  font-size: 15px;
  font-family: "Raleway", sans-serif;
  min-height: 100vh; 
  text-align: center;
`;

const Main = () => {
  return (
    <Background>
        <Header/>

    </Background>
  );
};

export default Main;
