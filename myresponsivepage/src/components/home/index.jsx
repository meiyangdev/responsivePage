import React from "react";
import styled from "styled-components";
import SceneryImg from '../../images/scenery.jpeg'

const HomeContainer = styled.div`
  display: flex;
`;

const HomeWrapper = styled.div`
  display: inline-block;
  margin-left: 30px;
`;

const HomeImg = styled.div`
  width: 500px;
  img {
    width: 100%;
    height: 100%auto;
  }
  padding: 5px;
`;

const HomeTittle = styled.h1`
  font-size: 40px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
  text-align:left;
`;

const HomeText = styled.p`
  font-size: 30px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 200;
  text-align: left;
  width: 80%;
`;
const SidebarWrapper = styled.div`
  display: inline-block;
  margin-left: 30px;
`;

const SidebarTitle = styled.h3`
  font-size: 30px;
  color: #222;
  font-weight: 500;
  width: 20%;
`;

const SidebarList = styled.ul`
  margin: 10px;
  padding: 10px;
  display: inline-block;
  height: 20px;
  list-style: none;
  display: inline-block;
`;

const SidebarItem = styled.li`
  height: 100%;
  padding: 0 1em;
  font-weight: 400;
  font-size: 20px;
  color: black;
  display: inline-block;
  align-items: center;
  justify-content: center;
  transition: all 20ms ease-in-out;
`;

const Link = styled.a`
  padding:5px; 
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  border-radius: 10px;
  background-image: linear-gradiant(to right. transparent 0% #8FBC8F 100%)
  transition: all 240ms ease-in-out;

  &:hover {
    transform: scale(2);
    cursor: pointer;
    background-color: #8FBC8F
  }
`;


export function Home(props) {
  return(
    <HomeContainer>
      <HomeWrapper>
      <HomeTittle>
        Welcome To The Greenland
      </HomeTittle>
      <HomeImg>
        <img src={SceneryImg} alt='picture of greenland'></img>
      </HomeImg>
      <HomeText>
      In enim minus eos totam tenetur id sint officia eum vitae optio ut  ipsam ut quos vero rem mollitia modi. Cum nostrum asperiores 33 voluptate voluptas vel amet velit aut voluptatem delectus non nemo eveniet est voluptatem amet qui voluptatem atque. Ut eligendi doloremque quo inventore nostrum aut autem mollitia id laudantium alias qui velit minima non temporibus distinctio in facere ullam. Est quia vero At doloremque libero qui totam fugit est voluptatem nisi ut optio totam qui necessitatibus placeat. 
      </HomeText>
      </HomeWrapper>
      <SidebarWrapper>
      <SidebarTitle>
      Overview
      </SidebarTitle>
      <SidebarList>
        <SidebarItem>
          <Link href='#'>Detail</Link>
          <Link href='#'>Review</Link>
          <Link href='#'>Next One</Link>
        </SidebarItem>
      </SidebarList>
      </SidebarWrapper>
    </HomeContainer>
    
  )
}