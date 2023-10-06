import { useState } from 'react';
import { BookType } from '../types';

function useReadingList() {
  const [readingList, setReadingList] = useState<BookType[]>([]);

  const addToReadingList = (book: BookType) => {
    setReadingList((prev) => [...prev, book]);
  };

  const removeFromReadingList = (isbn: string) => {
    const bookIndex = readingList.findIndex((book) => book.ISBN === isbn);

    setReadingList((prev) => prev.splice(bookIndex, 1));
  };

  return { readingList, addToReadingList, removeFromReadingList };
}

export default useReadingList;
