import { Book } from '..';
import { useLibraryContext } from '../../hooks';
import styles from './library.module.css';

function Library() {
  const { books } = useLibraryContext();

  if (books.length < 1) return <h1>No books to show! :(</h1>;

  return (
    <ul className={styles['library']}>
      {books.map((book) => (
        <Book key={book.ISBN} book={book} />
      ))}
    </ul>
  );
}

export default Library;
