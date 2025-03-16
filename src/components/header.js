import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: black;
  position: fixed;
  width: 100%;
  user-select: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 18px;
  font-family: "Raleway", sans-serif;
`;


const Logo = styled.div`
  color: white;
  padding: 10px 20px;
margin-left: auto;
`;

const Menuicon = styled.div`
color:white;
 margin-right: 8px;
`;

const Menu = styled.div`
  color: white;
    float: left;
    display: inline-block;
 
`;
const Button =styled.div`
border:none;
text-decoration: none;
    color: inherit;
    background-color: inherit;
cursor:pointer;
    display: flex;
  align-items: center;
    padding: 10px 20px;
    display: none;

 @media (max-width: 992px) {
     display: flex;
  }
`;


const Header = () => {
  return (
    <Wrapper>
      <Button>
      <Menuicon className="fa fa-bars" />
      <Menu>Menu</Menu>
        </Button>  
     
      <Logo>Logo</Logo>
    </Wrapper>
  );
};

export default Header;
