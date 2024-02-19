import React from "react";
import Logo from "../Logo";
import { styled } from "styled-components";

function Header() {
  return (
    <Wrapper>
      <Logo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 20px 32px 0;
`;

export default Header;
