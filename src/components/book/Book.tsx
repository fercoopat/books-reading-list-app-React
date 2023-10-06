import { useMemo } from 'react';
import { useLibraryContext } from '../../hooks';
import { BookType } from '../../types';
import styles from './book.module.css';

interface BookProps {
  book: BookType;
}

function Book({ book }: BookProps) {
  const { addToReadingList, removeFromReadingList, getBookInReadingList } =
    useLibraryContext();

  const isPinned = useMemo(
    () => getBookInReadingList(book.ISBN),
    [book.ISBN, getBookInReadingList]
  );

  const clickHandler = () => {
    if (!isPinned) {
      addToReadingList(book);
    } else {
      removeFromReadingList(book.ISBN);
    }
  };

  return (
    <li className={styles[isPinned ? 'pinned' : 'book']} onClick={clickHandler}>
      <p>{book.title}</p>
    </li>
  );
}

export default Book;
