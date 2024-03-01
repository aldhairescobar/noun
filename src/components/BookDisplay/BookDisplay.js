import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import BookGrid from "../BookGrid";
import { ToReadListContext } from "../ToReadListProvider";
import { ReadingListContext } from "../ReadingListProvider";

const API_KEY = import.meta.env.VITE_API_KEY;
const ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";

function BookDisplay() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState();
  const [status, setStatus] = React.useState("idle");
  const { booksToRead } = React.useContext(ToReadListContext);
  const { readingBooks } = React.useContext(ReadingListContext);

  console.log(searchResults);

  console.log(booksToRead);
  console.log(readingBooks);

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
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSubmit={handleSubmit}
      />
      {status === "idle" && <p>Welcome to noun!</p>}
      {status === "loading" && <p>Searching...</p>}
      {status === "error" && <p>Something went wrong!</p>}
      {status === "success" && <BookGrid searchResults={searchResults} />}
    </>
  );
}

export default BookDisplay;
