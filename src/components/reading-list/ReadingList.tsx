import { Book } from '..';
import { useLibraryContext } from '../../hooks';
import styles from './reading-list.module.css';

function ReadingList() {
  const { readingList } = useLibraryContext();

  if (readingList.length < 1)
    return <h1>Add some books to your reading list!</h1>;

  return (
    <>
      <h1>Reading list books: {readingList.length}</h1>
      <ul className={styles['reading-list']}>
        {readingList.map((book) => (
          <Book key={book.ISBN} book={book} />
        ))}
      </ul>
    </>
  );
}

export default ReadingList;
