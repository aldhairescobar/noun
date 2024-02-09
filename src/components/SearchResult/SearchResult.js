import React from "react";
import { styled } from "styled-components";
import { truncateString } from "../../utils";

/* Truncate authors too... */

function SearchResult({ id, ...rest }) {
  console.log(rest);

  return (
    <BookItem>
      <img src={rest.src} alt="" />
      <Info>
        <Title>{truncateString(rest.title, 40)}</Title>
        <Author>by {rest.authors} </Author>
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
  flex: 1 1 250px;
  max-width: 350px;
  height: 330px;
  display: flex;
  flex-direction: column;

  border: 1px solid hsl(0, 0%, 90%);
  border-radius: 10px;
  padding: 20px;

  img {
    width: 150px;
    height: 190px;
    object-fit: cover;
    object-position: 0 0;
    margin: 0 auto;
  }
`;

const Info = styled.div`
  padding: 24px 0 0;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 0.95rem;
  color: hsl(0, 0%, 10%);
`;

const Author = styled.p`
  font-size: 0.95rem;
  color: hsl(0, 0%, 30%);
`;

export default SearchResult;
