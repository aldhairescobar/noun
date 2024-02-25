import React from "react";
import { Menu, X, Bookmark } from "react-feather";
import styled from "styled-components";

const icons = {
  menu: Menu,
  close: X,
  bookmark: Bookmark,
};

function Icon({ id, color, size, strokeWidth, ...delegated }) {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  );
}

export default Icon;

const Wrapper = styled.div`
  & > svg {
    display: block;
    stroke-width: ${(p) =>
      p.strokeWidth !== undefined ? p.strokeWidth + "px" : undefined};
  }
`;
