import { useMemo } from 'react';
import { Book, GenderSelector } from '..';
import { GENDER } from '../../constants';
import { useFilteredBooks, useLibraryContext } from '../../hooks';
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
    <>
      <header>
        <h1>Total of books available: {booksAvailable}</h1>
        {selectedGender !== GENDER.ALL && (
          <h1>
            Books of {selectedGender}: {filteredBooks.length}
          </h1>
        )}
        <GenderSelector onSelectGender={changeGenderHandler} />
      </header>

      <section>
        <ul className={styles['library']}>
          {filteredBooks.map((book) => (
            <Book key={book.ISBN} book={book} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Library;
