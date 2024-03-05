import React from "react";
import SearchBar from "../SearchBar";
import BookGrid from "../BookGrid";

const API_KEY = import.meta.env.VITE_API_KEY;
const ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";

function BookDisplay() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState();
  const [status, setStatus] = React.useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setSearchTerm("");

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
