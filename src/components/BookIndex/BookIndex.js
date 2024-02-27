import React from "react";
import Sidebar from "../Sidebar";
import SearchBar from "../SearchBar/SearchBar";
import BookGrid from "../BookGrid";
import Header from "../Header";
import BOOKS from "../../data";
import { styled } from "styled-components";
import { QUERIES } from "../../constants";

const API_KEY = import.meta.env.VITE_API_KEY;
const ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";

function BookIndex() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState();
  const [status, setStatus] = React.useState("idle");

  const [booksToRead, setBooksToRead] = React.useState([]);
  const [readingBooks, setReadingBooks] = React.useState([]);

  console.log(booksToRead);
  console.log(readingBooks);
  /* 
  - handleToRead
    - if the book is in the state remove it (filter)
    - if the book isn't in the state add it.
  */

  function handleToRead(id) {
    const found = booksToRead?.find((book) => book.id === id);

    if (!found) {
      const item = BOOKS.filter((book) => book.id === id);
      setBooksToRead([...booksToRead, ...item]);
    } else {
      const nextBooks = booksToRead.filter((book) => book.id !== id);
      setBooksToRead(nextBooks);
    }
  }

  function handleReadingBooks(id) {
    const found = readingBooks?.find((book) => book.id === id);

    if (!found) {
      const item = BOOKS.filter((book) => book.id === id);
      setReadingBooks([...readingBooks, ...item]);
    } else {
      const nextBooks = readingBooks.filter((book) => book.id !== id);
      setReadingBooks(nextBooks);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("loading");

    const response = await fetch(
      `${ENDPOINT}${searchTerm}+intitle:${searchTerm}&printType=books&${API_KEY}`
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
      <Header />
      <DesktopMenu>
        <Sidebar />
      </DesktopMenu>
      <Main>
        <Container>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleSubmit={handleSubmit}
          />
          {/* {status === "idle" && <p>Welcome to Noun!</p>}
          {status === "loading" && <p>Searching...</p>}
          {status === "error" && <p>Something went wrong!</p>} */}
          {status === "idle" && (
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

/* Header, search component */

const DesktopMenu = styled.div`
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

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

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 16px;
  }
`;

export default BookIndex;
