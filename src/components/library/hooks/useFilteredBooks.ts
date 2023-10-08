import { ChangeEvent, useMemo, useState } from 'react';
import { GENDER } from '../../../constants';
import { useLibraryContext } from '../../../hooks';

function useFilteredBooks() {
  const { books } = useLibraryContext();

  const [selectedGender, setSelectedGender] = useState('');
  const [search, setSearch] = useState('');

  const booksByGender = useMemo(() => {
    if (selectedGender !== GENDER.ALL) {
      return [...books].filter((book) => book.genre === selectedGender);
    }
    return books;
  }, [selectedGender, books]);

  const filteredBooks = useMemo(() => {
    if (search.length > 0) {
      return [...booksByGender].filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    return booksByGender;
  }, [search, booksByGender]);

  const searchBookHandler = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setTimeout(() => {
      setSearch(target.value.trim());
    }, 500);
  };

  const changeGenderHandler = (gender: string) => {
    setSelectedGender(gender);
  };

  return {
    selectedGender,
    changeGenderHandler,
    filteredBooks,
    searchBookHandler,
  };
}

export default useFilteredBooks;
