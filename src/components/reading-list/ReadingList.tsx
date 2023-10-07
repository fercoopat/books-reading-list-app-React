import { Book } from '..';
import { useLibraryContext } from '../../hooks';
import styles from './reading-list.module.css';

function ReadingList() {
  const { readingList } = useLibraryContext();

  return (
    <section className={styles['reading-list-section']}>
      <p>Reading list books: {readingList.length}</p>
      <ul className={styles['reading-list']}>
        {readingList.map((book) => (
          <Book key={book.ISBN} book={book} />
        ))}
      </ul>
    </section>
  );
}

export default ReadingList;
