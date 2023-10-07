import { PropsWithChildren, createContext } from 'react';
import { BOOKS } from '../data';
import { BookType } from '../types';
import { useReadingList } from './hooks';

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
  const {
    readingList,
    getBookInReadingList,
    addToReadingList,
    removeFromReadingList,
  } = useReadingList();

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
