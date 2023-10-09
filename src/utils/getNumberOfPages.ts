import { BookType } from '../types';

export const getNumberOfPages = (bookList: BookType[]) => {
  let min = 0;
  let max = 0;

  if (bookList.length < 0) {
    return { min, max };
  }

  for (let index = 0; index < bookList.length; index++) {
    const book = bookList[index];

    min = book.pages;

    if (book.pages > max) {
      max = book.pages;
    } else if (book.pages < min) {
      min = book.pages;
    }
  }

  return { min, max };
};
