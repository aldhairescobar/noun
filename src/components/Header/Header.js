import React from "react";
import Logo from "../Logo";
import { styled } from "styled-components";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import { QUERIES } from "../../constants";
import MobileMenu from "../MobileMenu";

function Header() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  return (
    <header>
      <Wrapper>
        <UnstyledButton
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
          }}
        >
          <Icon id="menu" />
        </UnstyledButton>
        <Logo />
      </Wrapper>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => {
          setShowMobileMenu(false);
        }}
      />
    </header>
  );
}

const Wrapper = styled.div`
  display: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    align-items: center;
    gap: 14px;

    color: hsl(0, 0%, 16%);
    margin: 20px 32px 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin: 20px 24px 0;
  }
`;

export default Header;
