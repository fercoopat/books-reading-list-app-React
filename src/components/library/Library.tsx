import { useMemo } from 'react';
import { BookList, GenderSelector, SearchInput } from '..';
import { GENDER } from '../../constants';
import { useLibraryContext } from '../../hooks';
import { useFilteredBooks } from './hooks';
import styles from './library.module.css';

function Library() {
  const { books, readingList } = useLibraryContext();
  const {
    filteredBooks,
    selectedGender,
    changeGenderHandler,
    searchBookHandler,
  } = useFilteredBooks();

  const booksAvailable = useMemo(
    () => books.length - readingList.length,
    [books, readingList]
  );

  return (
    <section className={styles['library-section']}>
      <header className={styles['library-header']}>
        <p>Total of books available: {booksAvailable}</p>

        <SearchInput onChange={searchBookHandler} />

        <GenderSelector onSelectGender={changeGenderHandler} />

        {readingList.length < 1 && <p>Click a book ;)</p>}

        {selectedGender !== GENDER.ALL && (
          <p>
            Books of {selectedGender}: {filteredBooks.length}
          </p>
        )}
      </header>

      <main>
        {filteredBooks.length < 1 && <h1>No match!</h1>}

        <BookList filteredBooks={filteredBooks} />
      </main>
    </section>
  );
}

export default Library;
