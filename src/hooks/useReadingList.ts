import { useEffect, useState } from 'react';
import { INIT_VALUE } from '../constants';
import { BookType } from '../types';

function useReadingList() {
  const [readingList, setReadingList] = useState<BookType[]>(INIT_VALUE);

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

  useEffect(() => {
    localStorage.setItem('readingList', JSON.stringify(readingList));
  }, [readingList]);

  return {
    readingList,
    getBookInReadingList,
    addToReadingList,
    removeFromReadingList,
  };
}

export default useReadingList;
