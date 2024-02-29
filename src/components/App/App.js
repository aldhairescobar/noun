import React from "react";
import Navigation from "../Navigation";
import { styled } from "styled-components";
import { QUERIES } from "../../constants";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookIndex from "../../pages/BookIndex";
import ToRead from "./../../pages/ToRead";
import Reading from "./../../pages/Reading";
import ErrorPage from "./../../pages/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Main>
        <Container>
          <Routes>
            <Route
              path="/"
              element={<BookIndex />}
              errorElement={<ErrorPage />}
            />
            <Route path="to-read" element={<ToRead />} />
            <Route path="reading" element={<Reading />} />
          </Routes>
        </Container>
      </Main>
    </BrowserRouter>
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
