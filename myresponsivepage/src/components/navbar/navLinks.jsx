import React from "react";
import styled from "styled-components";
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinksItem = styled.li`
  height: 100%;
  padding: 0 1.5em;
  font-weight: 500;
  font-size: 20px;
  align-items: right;
  justify-conten: center;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 20ms ease-in-out;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  &:hover {
    transform: scale(2);
    cursor: pointer;
  }
`;


export function NavLinks(props) {
 return (
 <NavLinksContainer>
   <LinksWrapper>
   <LinksItem>
   <Link href='#'>Products</Link>
   </LinksItem>
   <LinksItem>
   <Link href='#'>Service</Link>
   </LinksItem>
   <LinksItem>
   <Link href='#'>Explore</Link>
   </LinksItem>
   <LinksItem>
   <Link href='#'>About us</Link>
   </LinksItem>
   </LinksWrapper>
 </NavLinksContainer>
 )
}