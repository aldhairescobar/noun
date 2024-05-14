import React from "react";
import Logo from "../Logo";
import { styled } from "styled-components";
import Icon from "../Icon";
import profilePic from "../../assets/profile-pic.png";
import { NavLink as LinkRouter } from "react-router-dom";

function Sidebar() {
  return (
    <Aside>
      <Header>
        <Logo />
      </Header>
      <Nav>
        <li>
          <NavLink to="explore">
            <Icon id="search" strokeWidth={1.5} />
            Explore
          </NavLink>
        </li>
        <li>
          <NavLink to="to-read">
            <Icon id="bookmark" strokeWidth={1.5} />
            To Read
          </NavLink>
        </li>
        <li>
          <NavLink to="reading">
            <Icon id="reading" strokeWidth={1.5} />
            Reading
          </NavLink>
        </li>
        {/* <li>
          <NavLink to="/">Finished</NavLink>
        </li> */}
      </Nav>
      <ProfileContainer>
        <img src={profilePic} />
      </ProfileContainer>
    </Aside>
  );
}

const Aside = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  overflow: auto;
  width: 220px;
  padding: 30px 20px 30px 40px;
  color: hsl(0, 0%, 100%);
  background-color: hsl(264, 57%, 33%);

  display: flex;
  flex-direction: column;

  p {
    font-size: 0.85rem;
    color: hsl(0, 0, 91%);
  }

  img {
    max-width: 50px;
  }
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  margin-bottom: 120px;

  a {
    color: inherit;
    text-decoration: none;
  }

  a:nth-of-type(2) {
    font-size: 1.25rem;
  }
`;

const Nav = styled.ol`
  padding: 20px 0 0 0;
  list-style: none;

  li {
    margin-bottom: 4px;
  }

  & a.active {
    background-color: hsl(264, 57%, 38%);
  }
`;

const NavLink = styled(LinkRouter)`
  display: flex;
  gap: 8px;

  text-decoration: none;

  color: inherit;
  font-size: 1.125rem;
  padding: 6px 10px;
  margin-left: -10px;
  border-radius: 5px;

  &:hover {
    background-color: hsl(264, 57%, 38%);
  }
`;

const ProfileContainer = styled.div`
  margin-top: auto;
`;

export default Sidebar;
