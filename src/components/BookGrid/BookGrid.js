import React from "react";
import BookCard from "../BookCard";
import { styled } from "styled-components";
import BOOKS from "../../data";
import { QUERIES } from "../../constants";

function BookGrid({
  searchResults,
  booksToRead,
  handleToRead,
  readingBooks,
  handleReadingBooks,
}) {
  if (searchResults === undefined || searchResults.length === 0) {
    return <p>No Results</p>;
  }

  return (
    <Wrapper>
      {searchResults.map((book) => {
        const key = `${book.id}-${book.etag}`;

        return (
          <BookCard
            key={key}
            id={book.id}
            booksToRead={booksToRead}
            handleToRead={handleToRead}
            readingBooks={readingBooks}
            handleReadingBooks={handleReadingBooks}
            bookObj={book}
          />
        );
      })}
    </Wrapper>
  );

  return (
    <Wrapper>
      {BOOKS.map(({ id, ...rest }) => (
        <BookCard
          key={id}
          id={id}
          booksToRead={booksToRead}
          handleToRead={handleToRead}
          readingBooks={readingBooks}
          handleReadingBooks={handleReadingBooks}
          {...rest}
        />
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

  @media ${QUERIES.phoneAndSmaller} {
    margin: 0 24px;
    justify-content: center;
  }
`;

export default BookGrid;
