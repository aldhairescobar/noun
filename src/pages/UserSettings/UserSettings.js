import React from "react";
import { styled } from "styled-components";
import { ReadingListContext } from "../../components/ReadingListProvider";
import { ToReadListContext } from "./../../components/ToReadListProvider";
import { QUERIES } from "../../constants";
import { truncateString } from "../../utils";
import { NavLink as LinkRouter } from "react-router-dom";

function UserSettings() {
  const { readingBooks, setReadingBooks } =
    React.useContext(ReadingListContext);
  const { booksToRead, setBooksToRead } = React.useContext(ToReadListContext);

  return (
    <Container>
      <PageTitle>Reading</PageTitle>
      <PageDescription>A collection of ..</PageDescription>
      <BooksWrapper>
        <ol>
          {readingBooks.slice(0, 2).map((book) => {
            const title = book.volumeInfo.title
              ? truncateString(book.volumeInfo.title, 40)
              : "Title missing";

            return <li key={book.id}>{title}</li>;
          })}
        </ol>
        <NavLink to="/reading">view more</NavLink>
      </BooksWrapper>
      <PageTitle>To Read</PageTitle>
      <PageDescription>A collection of ..</PageDescription>
      <BooksWrapper>
        <ol>
          {booksToRead.slice(0, 2).map((book) => {
            const title = book.volumeInfo.title
              ? truncateString(book.volumeInfo.title, 40)
              : "Title missing";

            return <li key={book.id}>{title}</li>;
          })}
        </ol>
        <NavLink to="/to-read">view more</NavLink>
      </BooksWrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 80px 0;
  margin: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 60px 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin: 0 24px;
    justify-content: center;
  }
`;

const BooksWrapper = styled.div`
  padding: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  text-align: left;
`;

const PageTitle = styled.h2`
  font-weight: 400;
  font-size: ${24 / 16}rem;
  color: hsl(0, 0%, 10%);
  margin-bottom: 4px;

  text-align: left;
`;

const PageDescription = styled.p`
  font-weight: 400;
  font-size: ${12 / 16}rem;
  color: hsl(0, 0%, 10%);
`;

const BookItemWrapper = styled.div`
  position: relative;
  width: 420px;
  min-height: 135px;
  display: flex;

  border: 1px solid hsl(0, 0%, 90%);
  border-radius: 10px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 90%;
  }
`;

const ImageWrapper = styled.div`
  min-width: 100px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  border-right: 1px solid hsl(0, 0%, 90%);
`;

const Image = styled.img`
  width: 60px;
  object-fit: cover;

  box-shadow: rgba(0, 0, 0, 0.15) 0px 1.1px 1.5px 0px,
    rgba(0, 0, 0, 0.1) 0px 2.8px 3.9px 0px,
    rgba(0, 0, 0, 0.08) 0px 5.8px 7.9px 0px,
    rgba(0, 0, 0, 0.06) 0px 12.0455px 16.4px 0px,
    rgba(0, 0, 0, 0.04) 0px 33px 45px 0px;
`;

const Info = styled.div`
  padding: 20px 30px;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: left;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 20px 24px;
  }
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: ${14 / 16}rem;
  color: hsl(0, 0%, 10%);
  margin-bottom: 6px;

  @media ${QUERIES.phoneAndSmaller} {
    margin-bottom: 4px;
  }
`;

const Author = styled.p`
  font-size: ${11 / 16}rem;
  color: hsl(0, 0%, 30%);
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: absolute;
  top: 6px;
  right: 10px;
`;

const NavLink = styled(LinkRouter)`
  text-decoration: none;

  color: purple;
  font-size: 1.125rem;
`;

/* const IconWrapper = styled(UnstyledButton)`
  & > div > svg:hover {
    fill: #ffd375;
  }
`; */

export default UserSettings;
