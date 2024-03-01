import React from "react";
import Navigation from "../Navigation";
import ToReadListProvider from "../ToReadListProvider";
import ReadingListProvider from "../ReadingListProvider";
import { styled } from "styled-components";
import { QUERIES } from "../../constants";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Main>
        <Container>
          <ToReadListProvider>
            <ReadingListProvider>
              <Outlet />
            </ReadingListProvider>
          </ToReadListProvider>
        </Container>
      </Main>
    </>
  );
}

const Main = styled.main`
  padding-left: 220px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-left: 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;

  & > p {
    font-size: ${28 / 16}rem;
    margin: 120px 32px 0;
  }

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 16px;

    & > p {
      font-size: ${28 / 16}rem;
    }
  }

  @media ${QUERIES.phoneAndSmaller} {
    & > p {
      font-size: ${20 / 16}rem;
    }
  }
`;

export default App;
