import React from "react";
import useStickyState from "../../hooks/use-sticky-state";

export const ToReadListContext = React.createContext();

function ToReadListProvider({ children }) {
  const [booksToRead, setBooksToRead] = useStickyState([], "books-to-read");

  /* useCallback */
  function handleToRead(book) {
    const isBookToRead = booksToRead.some((item) => item.id === book.id);

    if (!isBookToRead) {
      setBooksToRead([...booksToRead, book]);
    } else {
      const nextBooks = booksToRead.filter((item) => item.id !== book.id);
      setBooksToRead(nextBooks);
    }
  }

  const value = React.useMemo(() => {
    return { booksToRead, setBooksToRead, handleToRead };
  });

  return (
    <ToReadListContext.Provider value={value}>
      {children}
    </ToReadListContext.Provider>
  );
}

export default ToReadListProvider;
