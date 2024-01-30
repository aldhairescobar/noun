import React from "react";
import { styled } from "styled-components";

function SearchResultsList({ searchResults }) {
  if (searchResults === undefined || searchResults.length === 0) {
    return <p>No Results</p>;
  }

  return (
    <Wrapper>
      {searchResults.map(({ id, volumeInfo }) => (
        <BookItem key={id}>
          <img
            src={`https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
            alt=""
          />
          <Info>
            <Title>{volumeInfo.title}</Title>
            <Author>by {volumeInfo.authors}</Author>
          </Info>
        </BookItem>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const BookItem = styled.div`
  width: 250px;
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

/* 

const books = [
  {
    id: 1,
    src: "https://books.google.com/books/content?id=V0kxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "The Minimalist Entrepreneur",
    subtitle: "How Great Founders Do More with Less",
    authors: ["Sahil Lavingia"],
  },
  {
    id: 2,
    src: "https://books.google.com/books/content?id=Xh5TzQEACAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title:
      "Why You Need To Become A Minimalist, Hidden Benefits Of Minimalism And Not Spending Money, How Embracing Minimalism Will Streamline All Facets Of Your Life, And Unconventional Investment Strategies",
    subtitle: "",
    authors: ["Dr Harrison Sachs"],
  },
  {
    id: 3,
    src: "https://books.google.com/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "The Pragmatic Programmer",
    subtitle: "From Journeyman to Master",
    authors: ["Andrew Hunt", "David Thomas"],
  },
];




*/

export default SearchResultsList;
