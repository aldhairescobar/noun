import React from "react";
import { Menu, X, Bookmark, Eye, XCircle, Search } from "react-feather";
import styled from "styled-components";

const icons = {
  menu: Menu,
  close: X,
  bookmark: Bookmark,
  reading: Eye,
  xcircle: XCircle,
  search: Search,
};

function Icon({ id, isfilled, color, size, strokeWidth, ...delegated }) {
  const Component = icons[id];
  const fill = isfilled ? "#ffd375" : "none";

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} fill={fill} />
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
