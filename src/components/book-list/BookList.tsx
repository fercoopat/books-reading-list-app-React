import { Book } from '..';
import { BookType } from '../../types';
import styles from './book-list.module.css';

interface BookListProps {
  filteredBooks: BookType[];
}

function BookList({ filteredBooks }: BookListProps) {
  return (
    <ul className={styles['books-list']}>
      {filteredBooks.map((book) => (
        <Book key={book.ISBN} book={book} />
      ))}
    </ul>
  );
}

export default BookList;
