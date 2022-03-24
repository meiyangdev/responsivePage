import React, {useState} from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";

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
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 65px;
  left: 0;
`;

const LinksItem = styled.li`
  width: 100%;
  padding: 0 1.5em;
  font-weight: 500;
  font-size: 16px;
  color: black;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {

  const [menuOpen, setMenuOpen] = useState(false)

 return (
 <NavLinksContainer>
   <MenuToggle menuOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
   {menuOpen && (
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
   <Marginer />
   <Accessibility />
   </LinksWrapper>
   )}
 </NavLinksContainer>
 );
}