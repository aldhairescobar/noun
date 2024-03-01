import React from "react";
import useStickyState from "../../hooks/use-sticky-state";

export const ReadingListContext = React.createContext();

function ReadingListProvider({ children }) {
  const [readingBooks, setReadingBooks] = useStickyState([], "reading-books");

  /* useCallback */
  function handleReadingBooks(book) {
    const isBookReading = readingBooks.some((item) => item.id === book.id);

    if (!isBookReading) {
      setReadingBooks([...readingBooks, book]);
    } else {
      const nextBooks = readingBooks.filter((book) => book.id !== book.id);
      setReadingBooks(nextBooks);
    }
  }

  const value = React.useMemo(() => {
    return { readingBooks, setReadingBooks, handleReadingBooks };
  });

  return (
    <ReadingListContext.Provider value={value}>
      {children}
    </ReadingListContext.Provider>
  );
}

export default ReadingListProvider;
