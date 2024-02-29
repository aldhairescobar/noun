import React from "react";
import Navigation from "../Navigation/Navigation";
import SearchBar from "../SearchBar/SearchBar";
import BookGrid from "../BookGrid";
import { styled } from "styled-components";
import { QUERIES } from "../../constants";
import useStickyState from "../../hooks/use-sticky-state";

const API_KEY = import.meta.env.VITE_API_KEY;
const ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";

function BookIndex() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState();
  const [status, setStatus] = React.useState("idle");

  const [booksToRead, setBooksToRead] = useStickyState([], "books-to-read");
  const [readingBooks, setReadingBooks] = useStickyState([], "reading-books");

  console.log(searchResults);

  console.log(booksToRead);
  console.log(readingBooks);

  function handleToRead(book) {
    const isBookToRead = booksToRead.some((item) => item.id === book.id);

    if (!isBookToRead) {
      setBooksToRead([...booksToRead, book]);
    } else {
      const nextBooks = booksToRead.filter((item) => item.id !== book.id);
      setBooksToRead(nextBooks);
    }
  }

  function handleReadingBooks(book) {
    const isBookReading = readingBooks.some((item) => item.id === book.id);

    if (!isBookReading) {
      setReadingBooks([...readingBooks, book]);
    } else {
      const nextBooks = readingBooks.filter((book) => book.id !== book.id);
      setReadingBooks(nextBooks);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("loading");

    const response = await fetch(
      `${ENDPOINT}${searchTerm}+intitle:${searchTerm}&maxResults=6&printType=books&${API_KEY}`
    );
    const json = await response.json();

    if (response.ok) {
      setSearchResults(json.items);
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  return (
    <>
      <Navigation />
      <Main>
        <Container>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSubmit={handleSubmit}
          />
          {status === "idle" && <p>Welcome to noun!</p>}
          {status === "loading" && <p>Searching...</p>}
          {status === "error" && <p>Something went wrong!</p>}
          {status === "success" && (
            <BookGrid
              searchResults={searchResults}
              booksToRead={booksToRead}
              handleToRead={handleToRead}
              handleReadingBooks={handleReadingBooks}
              readingBooks={readingBooks}
            />
          )}
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

export default BookIndex;
