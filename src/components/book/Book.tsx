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

  const classes = useMemo(
    () => (isPinned ? 'book-pinned' : 'book'),
    [isPinned]
  );

  return (
    <li className={styles[classes]} onClick={clickHandler}>
      <header>
        <img src={book.cover} alt={book.title} />
      </header>
      <main>
        <p className={styles['book-title']}>{book.title}</p>
      </main>
      <footer>
        <small className={styles['book-author']}>{book.author.name}</small>
        <small className={styles['book-pages']}>{book.pages} pages</small>
      </footer>
    </li>
  );
}

export default Book;
