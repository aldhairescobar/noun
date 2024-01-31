import React from "react";
import SearchResult from "../SearchResult";
import { styled } from "styled-components";

function SearchResultsList({ searchResults }) {
  if (searchResults === undefined || searchResults.length === 0) {
    return <p>No Results</p>;
  }

  return (
    <Wrapper>
      {searchResults.map(({ id, volumeInfo }) => (
        <SearchResult key={id} id={id} volumeInfo={volumeInfo} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export default SearchResultsList;
