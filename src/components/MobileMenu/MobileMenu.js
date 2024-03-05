import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import profilePic from "../../assets/profile-pic.png";
import { Root, Portal, Overlay, Content } from "@radix-ui/react-dialog";
import { Link as LinkRouter } from "react-router-dom";

function MobileMenu({ isOpen, onDismiss }) {
  return (
    <Root open={isOpen} onOpenChange={onDismiss}>
      <Portal>
        <Backdrop />
        <Drawer>
          <Filler />
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
          </CloseButton>
          <Nav>
            <NavLink to="to-read" onClick={onDismiss}>
              To Read
            </NavLink>
            <NavLink to="reading" onClick={onDismiss}>
              Reading
            </NavLink>
            {/* <NavLink>Finished</NavLink> */}
          </Nav>

          <Footer>
            <ProfileLink>
              <ProfileImage src={profilePic} />
            </ProfileLink>
          </Footer>
        </Drawer>
      </Portal>
    </Root>
  );
}

const Backdrop = styled(Overlay)`
  background: hsla(220, 5%, 40%, 0.8); /* Optional */
  /* background-color: hsl(41, 100%, 73%, 0.6); */
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: flex-start;
  animation: fadeIn 850ms cubic-bezier(0.14, 0.78, 0.36, 1);
`;

const Drawer = styled(Content)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 70%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: hsl(264, 57%, 33%);
  animation: slideIn 500ms cubic-bezier(0.14, 0.78, 0.36, 1);
`;

const Filler = styled.div`
  flex: 1;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: hsl(360, 100%, 100%);
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(LinkRouter)`
  text-decoration: none;
  display: block;
  color: inherit;
  font-size: ${24 / 16}rem;
  padding: 4px 10px;
  margin-left: -10px;
  border-radius: 5px;
  cursor: pointer;
  color: hsl(360, 100%, 100%);

  &:hover,
  &:focus {
    background-color: hsl(264, 57%, 38%);
  }
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ProfileLink = styled.a``;

const ProfileImage = styled.img`
  max-width: 50px;
`;

export default MobileMenu;
