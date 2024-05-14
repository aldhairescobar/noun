import React from "react";
import { styled } from "styled-components";
import { Navigate } from "react-router-dom";
import { QUERIES } from "../../constants";

function SignUp() {
  const [toExplore, setToExplore] = React.useState(false);

  if (toExplore === true) {
    return <Navigate to="/explore" />;
  }

  function handleSubmit(e) {
    e.preventDefault();

    setToExplore(true);
  }

  return (
    <Container>
      <PageTitle>Sign Up Page</PageTitle>
      <form onSubmit={handleSubmit}>
        <button>Log In</button>
      </form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10rem;
`;

const PageTitle = styled.h1`
  font-weight: 400;
  font-size: ${32 / 16}rem;
  color: hsl(0, 0%, 10%);
  margin-bottom: 4px;
`;

export default SignUp;
