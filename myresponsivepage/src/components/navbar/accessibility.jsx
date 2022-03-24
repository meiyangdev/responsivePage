import React from "react"
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: black;
  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  background-color: #AEDB9F;
  background-image: linear-gradiant(to right. transparent 0% #8FBC8F 100%)
  transition: all 240ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #8FBC8F
  }
  &: last-of-type {
    margin-right:1.1em;
  }
  
`;

export function Accessibility(props) {
  return (
  <AccessibilityContainer>
    <LoginButton>
      Register
    </LoginButton>
    <LoginButton>
      Login
    </LoginButton>
    
  </AccessibilityContainer>
  )
}