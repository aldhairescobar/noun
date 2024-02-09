import React from "react";
import SearchResult from "../SearchResult";
import { styled } from "styled-components";

function SearchResultsList({ searchResults }) {
  /* if (searchResults === undefined || searchResults.length === 0) {
    return <p>No Results</p>;
  } */

  return (
    <Wrapper>
      {/* {searchResults.map(({ id, volumeInfo }) => (
        <SearchResult key={id} id={id} volumeInfo={volumeInfo} />
      ))} */}

      {BOOKS.map(({ id, ...rest }) => (
        <SearchResult key={id} {...rest} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 80px 0;
  margin: 0 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const BOOKS = [
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
  {
    id: 4,
    src: "https://books.google.com/books/content?id=V0kxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "The Minimalist Entrepreneur",
    subtitle: "How Great Founders Do More with Less",
    authors: ["Sahil Lavingia"],
  },
  {
    id: 5,
    src: "https://books.google.com/books/content?id=Xh5TzQEACAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title:
      "Why You Need To Become A Minimalist, Hidden Benefits Of Minimalism And Not Spending Money, How Embracing Minimalism Will Streamline All Facets Of Your Life, And Unconventional Investment Strategies",
    subtitle: "",
    authors: ["Dr Harrison Sachs"],
  },
  {
    id: 6,
    src: "https://books.google.com/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "The Pragmatic Programmer",
    subtitle: "From Journeyman to Master",
    authors: ["Andrew Hunt", "David Thomas"],
  },
  {
    id: 7,
    src: "https://books.google.com/books/content?id=V0kxEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "The Minimalist Entrepreneur",
    subtitle: "How Great Founders Do More with Less",
    authors: ["Sahil Lavingia"],
  },
  {
    id: 8,
    src: "https://books.google.com/books/content?id=Xh5TzQEACAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title:
      "Why You Need To Become A Minimalist, Hidden Benefits Of Minimalism And Not Spending Money, How Embracing Minimalism Will Streamline All Facets Of Your Life, And Unconventional Investment Strategies",
    subtitle: "",
    authors: ["Dr Harrison Sachs"],
  },
  {
    id: 9,
    src: "https://books.google.com/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "The Pragmatic Programmer",
    subtitle: "From Journeyman to Master",
    authors: ["Andrew Hunt", "David Thomas"],
  },
  {
    id: 10,
    src: "https://books.google.com/books/content?id=5wBQEp6ruIAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "The Pragmatic Programmer",
    subtitle: "From Journeyman to Master",
    authors: ["Andrew Hunt", "David Thomas"],
  },
];

export default SearchResultsList;
