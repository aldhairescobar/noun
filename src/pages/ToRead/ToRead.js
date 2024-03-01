import React from "react";
import UnstyledButton from "./../../components/UnstyledButton";
import Icon from "./../../components/Icon";
import { styled } from "styled-components";
import { ToReadListContext } from "./../../components/ToReadListProvider";
import { QUERIES } from "../../constants";
import { truncateString } from "../../utils";

function ToRead() {
  const { booksToRead } = React.useContext(ToReadListContext);
  return (
    <Wrapper>
      {booksToRead.map((book) => {
        let author;
        let title;

        if (book.volumeInfo.authors) {
          author = truncateString(book.volumeInfo.authors[0], 20);
          title = truncateString(book.volumeInfo.title, 40);
        } else {
          author = "Author missing";
          title = "Title missing";
        }

        return (
          <BookItem key={book.id}>
            <Image
              src={`https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
              alt=""
            />
            <ActionsWrapper>
              <IconWrapper>
                <Icon id="trash" strokeWidth={0.8} />
              </IconWrapper>
            </ActionsWrapper>
            <Info>
              <Title>{title}</Title>
              <Author>by {author}</Author>
            </Info>
          </BookItem>
        );
      })}
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

  @media ${QUERIES.laptopAndSmaller} {
    gap: 16px;
  }

  @media ${QUERIES.tabletAndSmaller} {
    justify-content: flex-start;
    padding: 60px 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin: 0 24px;
    justify-content: center;
  }
`;

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

export default ToRead;
