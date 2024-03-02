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
            <ImageWrapper>
              <Image
                src={`https://books.google.com/books/content?id=${book.id}&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api`}
                alt=""
              />
            </ImageWrapper>
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
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 60px 0;
  }

  @media ${QUERIES.phoneAndSmaller} {
    margin: 0 24px;
    justify-content: center;
  }
`;

const BookItem = styled.div`
  position: relative;
  width: 420px;
  display: flex;

  border: 1px solid hsl(0, 0%, 90%);
  border-radius: 10px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 80%;
  }
`;

const ImageWrapper = styled.div`
  min-width: 100px;
  padding: 30px 24px;
  border-right: 1px solid hsl(0, 0%, 90%);
`;

const Image = styled.img`
  width: 100%;
  height: 74px;
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

const IconWrapper = styled(UnstyledButton)``;

export default ToRead;
