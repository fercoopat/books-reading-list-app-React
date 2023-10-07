import { Book, GenderSelector } from '..';
import { GENDER } from '../../constants';
import { useFilteredBooks, useLibraryContext } from '../../hooks';
import styles from './library.module.css';

function Library() {
  const { books } = useLibraryContext();
  const { filteredBooks, selectedGender, changeGenderHandler } =
    useFilteredBooks();

  if (filteredBooks.length < 1) return <h1>No books to show! :(</h1>;

  return (
    <>
      <header>
        <h1>Total of books: {books.length}</h1>
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
