import React from "react";
import styled from "styled-components";
import GreenLandLogoImg from '../../images/logo.jpeg'
const LogoWrapper = styled.div`
  display: felx;
  align-items: center;
`;

const LogoImg = styled.div`
  width: 29px;
  height: 29px;
  img {
    width: 100%;
    height: 100%auto;
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;
export function Logo(props) {
  return <LogoWrapper>
    <LogoImg><img src= {GreenLandLogoImg} alt= 'logo of greenland'></img></LogoImg>
    <LogoText>GreenLand</LogoText>
  </LogoWrapper>
}