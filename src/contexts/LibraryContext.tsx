import { PropsWithChildren, createContext, useState } from 'react';
import { BOOKS } from '../data';
import { BookType } from '../types';

interface ContextType {
  books: BookType[];
  readingList: BookType[];
  addToReadingList: (book: BookType) => void;
  removeFromReadingList: (isbn: string) => void;
  getBookInReadingList: (isbn: string) => boolean;
}

export const LibraryContext = createContext<ContextType>({
  books: [],
  readingList: [],
  addToReadingList: () => {},
  removeFromReadingList: () => {},
  getBookInReadingList: () => false,
});

export const LibraryContextProvider = ({ children }: PropsWithChildren) => {
  const [readingList, setReadingList] = useState<BookType[]>([]);

  const getBookInReadingList = (isbn: string) => {
    const index = readingList.findIndex((book) => book.ISBN === isbn);

    return index < 0 ? false : true;
  };

  const addToReadingList = (book: BookType) => {
    setReadingList((prev) => [...prev, book]);
  };

  const removeFromReadingList = (isbn: string) => {
    const updatedList = [...readingList].filter((book) => book.ISBN !== isbn);

    setReadingList(updatedList);
  };

  return (
    <LibraryContext.Provider
      value={{
        books: BOOKS,
        readingList,
        addToReadingList,
        removeFromReadingList,
        getBookInReadingList,
      }}
    >
      {children}
    </LibraryContext.Provider>
  );
};
