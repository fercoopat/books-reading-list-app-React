import { useMemo, useState } from 'react';
import { useLibraryContext } from '.';
import { GENDER } from '../constants';

function useFilteredBooks() {
  const { books } = useLibraryContext();

  const [selectedGender, setSelectedGender] = useState('');

  const filteredBooks = useMemo(() => {
    if (selectedGender !== GENDER.ALL) {
      return [...books].filter((book) => book.genre === selectedGender);
    }
    return books;
  }, [selectedGender, books]);

  const changeGenderHandler = (gender: string) => {
    setSelectedGender(gender);
  };

  return { selectedGender, changeGenderHandler, filteredBooks };
}

export default useFilteredBooks;
