import React from 'react';
import styled from 'styled-components';
import Header from "./header";  // Header 컴포넌트
import Sidebar from './sidebar';  // Sidebar 컴포넌트
import Dashboard from "./dashboard";  // Dashboard 컴포넌트

// 배경 스타일
const Background = styled.div`
  background-color: #f1f1f1;
  color: black;
  position: relative; 
  width: 100%;
  font-size: 15px;
  font-family: "Raleway", sans-serif;
  min-height: 100vh; 
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;

`;

const Main = () => {
  return (
    <Background>
      <Header />  {/* 헤더 컴포넌트는 최상단에 위치 */}
      <ContentWrapper>
        <Sidebar />  {/* 사이드바 컴포넌트 */}
        <Dashboard />  {/* 대시보드 컴포넌트 */}
      </ContentWrapper>
    </Background>
  );
};

export default Main;