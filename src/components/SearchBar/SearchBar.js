import React from "react";
import { styled } from "styled-components";
import { QUERIES } from "../../constants";

function SearchBar({ searchTerm, setSearchTerm, handleSubmit }) {
  return (
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
            setSearchTerm(event.target.value);
          }}
        />
        <SubmitBtn>Search</SubmitBtn>
      </Form>
    </FormWrapper>
  );
}

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

export default SearchBar;
