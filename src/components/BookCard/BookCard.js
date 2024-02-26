import React from "react";
import UnstyledButton from "../UnstyledButton/UnstyledButton";
import Icon from "../Icon/Icon";
import { styled } from "styled-components";
import { QUERIES } from "../../constants";
import { truncateString } from "../../utils";

/* Truncate authors too... */

function BookCard({ id, handleToRead, booksToRead, ...rest }) {
  const found = booksToRead?.find((book) => book.id === id);
  const fill = found;

  const author = truncateString(rest.authors[0], 20);

  console.log(author);
  /* console.log(found);
  console.log(booksToRead); */

  return (
    <BookItem>
      <Image src={rest.src} alt="" />
      <IconWrapper onClick={() => handleToRead(id)}>
        <Icon id="bookmark" isfilled={fill} strokeWidth={0.8} />
      </IconWrapper>
      <Info>
        <Title>{truncateString(rest.title, 40)}</Title>
        <Author>by {author} </Author>
      </Info>
    </BookItem>
  );

  return (
    <BookItem>
      <img
        src={`https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
        alt=""
      />
      <Info>
        <Title>{truncateString(volumeInfo.title, 40)}</Title>
        <Author>by {volumeInfo.authors}</Author>
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

const IconWrapper = styled(UnstyledButton)`
  position: absolute;
  top: 6px;
  right: 10px;
`;

export default BookCard;
