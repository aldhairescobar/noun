import React from "react";
import BookCard from "../BookCard";
import { styled } from "styled-components";
import BOOKS from "../../data";
import { QUERIES } from "../../constants";

function BookGrid({ searchResults }) {
  /* if (searchResults === undefined || searchResults.length === 0) {
    return <p>No Results</p>;
  } */

  return (
    <Wrapper>
      {/* {searchResults.map(({ id, volumeInfo }) => (
        <SearchResult key={id} id={id} volumeInfo={volumeInfo} />
      ))} */}

      {BOOKS.map(({ id, ...rest }) => (
        <BookCard key={id} {...rest} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 80px 0;
  margin: 0 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media ${QUERIES.laptopAndSmaller} {
    gap: 16px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: flex-start;
    padding: 60px 0;
  }
`;

export default BookGrid;
