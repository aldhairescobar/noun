import React from "react";
import { styled } from "styled-components";
import Header from "../Header";

function Logo() {
  return (
    <Link href="/">
      <Wrapper>noun</Wrapper>
    </Link>
  );
}

const Link = styled.a`
  /* margin-bottom: 50px; */
  text-decoration: none;
  width: fit-content;
  color: inherit;

  ${Header.Wrapper} & {
    position: relative;
    bottom: 2px;
  }
`;

const Wrapper = styled.h1`
  font-size: 1.75rem;
  width: inherit;
  font-weight: 400;
`;

export default Logo;
