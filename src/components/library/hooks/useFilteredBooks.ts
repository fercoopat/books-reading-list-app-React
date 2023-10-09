import { ChangeEvent, useMemo, useState } from 'react';
import { GENDER } from '../../../constants';
import { useLibraryContext } from '../../../hooks';
import { getNumberOfPages } from '../../../utils';

function useFilteredBooks() {
  const { books } = useLibraryContext();

  const numberOfPages = useMemo(() => getNumberOfPages(books), [books]);

  const [selectedGender, setSelectedGender] = useState('');
  const [search, setSearch] = useState('');
  const [pages, setPages] = useState(numberOfPages.min);

  const booksByGender = useMemo(() => {
    if (selectedGender !== GENDER.ALL) {
      return [...books].filter((book) => book.genre === selectedGender);
    }
    return books;
  }, [selectedGender, books]);

  const booksByNumberOfPages = useMemo(() => {
    if (!pages) {
      return booksByGender;
    }
    return [...booksByGender].filter((book) => book.pages >= pages);
  }, [booksByGender, pages]);

  const filteredBooks = useMemo(() => {
    if (search.length > 0) {
      return [...booksByNumberOfPages].filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return booksByNumberOfPages;
  }, [search, booksByNumberOfPages]);

  const changeGenderHandler = (gender: string) => {
    setSelectedGender(gender);
  };

  const searchBookHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearch(target.value.trim());
    }, 500);
  };

  const rangeChangeHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setPages(+target.value);
    }, 500);
  };

  return {
    changeGenderHandler,
    filteredBooks,
    numberOfPages,
    rangeChangeHandler,
    searchBookHandler,
    selectedGender,
  };
}

export default useFilteredBooks;
