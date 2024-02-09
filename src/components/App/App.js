import React from "react";
import Sidebar from "../Sidebar";
import { styled } from "styled-components";
import SearchResultsList from "../SearchResultsList/SearchResultsList";

const API_KEY = import.meta.env.VITE_API_KEY;
const ENDPOINT = "https://www.googleapis.com/books/v1/volumes?q=";

function App() {
  const [searchTerm, useSearchTerm] = React.useState("");
  const [searchResults, useSearchResults] = React.useState();
  const [status, useStatus] = React.useState("idle");

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
      <Sidebar />
      <main style={{ paddingLeft: "220px" }}>
        <Wrapper>
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
            <SearchResultsList searchResults={searchResults} />
          )}
        </Wrapper>
      </main>
    </>
  );
}

/* Header, search component */

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
`;

const Form = styled.form`
  width: 536px;
  height: 42px;
`;

const TextInput = styled.input`
  width: 82%;
  height: 100%;
  border: 1px solid hsl(0, 0%, 70%);
  border-right: none;
  border-radius: 5px 0 0 5px;
  padding: 0 12px;
`;

const SubmitBtn = styled.button`
  width: 18%;
  height: 100%;
  background-color: #ffd375;
  border: none;
  padding: 0 18px;
  border-radius: 0 5px 5px 0;
  border: 1px solid transparent;
`;

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
`;

export default App;
