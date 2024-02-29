import React from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import { styled } from "styled-components";
import { QUERIES } from "../../constants";

function Navigation() {
  return (
    <>
      <Header />
      <DesktopMenu>
        <Sidebar />
      </DesktopMenu>
    </>
  );
}

const DesktopMenu = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default Navigation;
