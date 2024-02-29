import React from "react";
import { styled } from "styled-components";
import Header from "../Header";
import { Link as LinkRouter } from "react-router-dom";

function Logo() {
  return (
    <Link to="/">
      <Wrapper>noun</Wrapper>
    </Link>
  );
}

const Link = styled(LinkRouter)`
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
