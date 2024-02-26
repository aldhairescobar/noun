import React from "react";
import Sidebar from "../Sidebar";
import BookGrid from "../BookGrid";
import Header from "../Header";
import BOOKS from "../../data";
import { styled } from "styled-components";
import { QUERIES } from "../../constants";

const API_KEY = import.meta.env.VITE_API_KEY;
const ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";

function BookIndex() {
  const [searchTerm, useSearchTerm] = React.useState("");
  const [searchResults, useSearchResults] = React.useState();
  const [status, useStatus] = React.useState("idle");

  const [booksToRead, setBooksToRead] = React.useState([]);

  function addToRead(id) {
    const item = BOOKS.filter((book) => book.id === id);
    setBooksToRead([...booksToRead, ...item]);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    useStatus("loading");

    const response = await fetch(
      `${ENDPOINT}${searchTerm}+intitle:${searchTerm}&printType=books&${API_KEY}`
    );
    const json = await response.json();

    if (response.ok) {
      useSearchResults(json.items);
      useStatus("success");
    } else {
      useStatus("error");
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
          <FormWrapper>
            <Form onSubmit={handleSubmit}>
              <label style={visuallyHidden} htmlFor="Search">
                Search
              </label>
              <TextInput
                required={true}
                id="Search"
                type="text"
                placeholder="Search for books"
                value={searchTerm}
                onChange={(event) => {
                  useSearchTerm(event.target.value);
                }}
              />
              <SubmitBtn>Search</SubmitBtn>
            </Form>
          </FormWrapper>
          {/* {status === "idle" && <p>Welcome to Noun!</p>}
          {status === "loading" && <p>Searching...</p>}
          {status === "error" && <p>Something went wrong!</p>} */}
          {status === "idle" && (
            <BookGrid
              searchResults={searchResults}
              addToRead={addToRead}
              booksToRead={booksToRead}
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

const visuallyHidden = {
  position: "absolute",
  overflow: "hidden",
  clip: "rect(0 0 0 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: 0,
  border: 0,
};

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: flex-start;
    margin-left: 32px;
    margin-right: 32px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

const Form = styled.form`
  width: 536px;
  height: 42px;

  display: flex;

  @media ${QUERIES.tabletAndSmaller} {
    width: 500px;
  }
`;

const TextInput = styled.input`
  width: 82%;
  height: 100%;
  border: 1px solid hsl(0, 0%, 70%);
  border-right: none;
  border-radius: 5px 0 0 5px;
  padding: 0 12px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
    border: 1px solid hsl(0, 0%, 70%);
    border-radius: 5px;
  }
`;

const SubmitBtn = styled.button`
  width: min-content;
  height: 100%;
  background-color: #ffd375;
  border: none;
  padding: 0 18px;
  border-radius: 0 5px 5px 0;
  border: 1px solid transparent;
  color: hsl(0, 0%, 0%);

  @media ${QUERIES.phoneAndSmaller} {
    display: none;
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
