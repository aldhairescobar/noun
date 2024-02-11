import React from "react";
import { styled } from "styled-components";

function Logo() {
  return (
    <Link href="/">
      <Wrapper>noun</Wrapper>
    </Link>
  );
}

const Link = styled.a`
  margin-bottom: 50px;
  width: fit-content;
`;

const Wrapper = styled.h1`
  font-size: 1.75rem;
  width: inherit;
  font-weight: 400;
`;

export default Logo;
