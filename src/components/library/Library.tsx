import { useMemo } from 'react';
import { Book, GenderSelector } from '..';
import { GENDER } from '../../constants';
import { useLibraryContext } from '../../hooks';
import { useFilteredBooks } from './hooks';
import styles from './library.module.css';

function Library() {
  const { books, readingList } = useLibraryContext();
  const { filteredBooks, selectedGender, changeGenderHandler } =
    useFilteredBooks();

  const booksAvailable = useMemo(
    () => books.length - readingList.length,
    [books, readingList]
  );

  if (filteredBooks.length < 1) return <h1>No books to show! :(</h1>;

  return (
    <section className={styles['library-section']}>
      <header className={styles['library-header']}>
        <p>Total of books available: {booksAvailable}</p>

        <GenderSelector onSelectGender={changeGenderHandler} />
        {selectedGender !== GENDER.ALL && (
          <p>
            Books of {selectedGender}: {filteredBooks.length}
          </p>
        )}
      </header>

      <main>
        <ul className={styles['books-list']}>
          {filteredBooks.map((book) => (
            <Book key={book.ISBN} book={book} />
          ))}
        </ul>
      </main>
    </section>
  );
}

export default Library;
