import React from "react";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import Icon from "../Icon/Icon";
import { styled } from "styled-components";
import { QUERIES } from "../../constants";
import { truncateString } from "../../utils";
import { ToReadListContext } from "../ToReadListProvider";
import { ReadingListContext } from "../ReadingListProvider";

function BookCard({ id, bookObj }) {
  const { booksToRead, handleToRead } = React.useContext(ToReadListContext);
  const { readingBooks, handleReadingBooks } =
    React.useContext(ReadingListContext);
  const isBookmarked = booksToRead.some((book) => book.id === id);
  const isReading = readingBooks.some((book) => book.id === id);

  let author;
  let title;

  if (bookObj.volumeInfo.authors) {
    author = truncateString(bookObj.volumeInfo.authors[0], 20);
    title = truncateString(bookObj.volumeInfo.title, 40);
  } else {
    author = "Author missing";
    title = "Title missing";
  }

  return (
    <BookItem>
      <Image
        src={`https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
        alt=""
      />
      <ActionsWrapper>
        <IconWrapper
          onClick={() =>
            handleToRead({
              id,
              volumeInfo: bookObj.volumeInfo,
            })
          }
        >
          <Icon id="bookmark" isfilled={isBookmarked} strokeWidth={0.8} />
        </IconWrapper>
        <IconWrapper
          onClick={() =>
            handleReadingBooks({
              id,
              volumeInfo: bookObj.volumeInfo,
            })
          }
        >
          <Icon id="reading" isfilled={isReading} strokeWidth={0.8} />
        </IconWrapper>
      </ActionsWrapper>
      <Info>
        <Title>{title}</Title>
        <Author>by {author}</Author>
      </Info>
    </BookItem>
  );

  return (
    <BookItem>
      <Image src={rest.src} alt="" />
      <ActionsWrapper>
        <IconWrapper onClick={() => handleToRead(id)}>
          <Icon id="bookmark" isfilled={isBookmarked} strokeWidth={0.8} />
        </IconWrapper>
        <IconWrapper onClick={() => handleReadingBooks(id)}>
          <Icon id="reading" isfilled={isReading} strokeWidth={0.8} />
        </IconWrapper>
      </ActionsWrapper>
      <Info>
        <Title>{title}</Title>
        <Author>by {author} </Author>
      </Info>
    </BookItem>
  );
}

const BookItem = styled.div`
  position: relative;
  flex: 1 1 250px;
  max-width: 350px;
  height: 330px;
  display: flex;
  flex-direction: column;

  border: 1px solid hsl(0, 0%, 90%);
  border-radius: 10px;
  padding: 20px;

  @media ${QUERIES.laptopAndSmaller} {
    flex-basis: 230px;
    max-width: 250px;
    height: 290px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    flex-basis: 200px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    flex-basis: 200px;
    max-width: 220px;
  }
`;

const Image = styled.img`
  width: 150px;
  height: 190px;
  object-fit: cover;
  object-position: 0 0;
  margin: 0 auto;

  @media ${QUERIES.laptopAndSmaller} {
    width: 130px;
    height: 170px;
  }

  @media ${QUERIES.laptopAndSmaller} {
    width: 110px;
    height: 140px;
  }
`;

const Info = styled.div`
  padding: 24px 0 0;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${QUERIES.laptopAndSmaller} {
    padding-top: 18px;
  }
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: ${15 / 16}rem;
  color: hsl(0, 0%, 10%);

  @media ${QUERIES.laptopAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const Author = styled.p`
  font-size: ${15 / 16}rem;
  color: hsl(0, 0%, 30%);

  @media ${QUERIES.laptopAndSmaller} {
    font-size: ${14 / 16}rem;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: absolute;
  top: 6px;
  right: 10px;
`;

const IconWrapper = styled(UnstyledButton)`
  /* position: absolute;
  top: 6px;
  right: 10px; */
`;

export default BookCard;
