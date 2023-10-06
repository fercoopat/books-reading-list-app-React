import { useEffect, useState } from 'react';
import { LIBRARY_API_ENDPOINT } from '../constants';
import { BookType } from '../types';

function useFetchBooks() {
  const [books, setBooks] = useState<BookType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(LIBRARY_API_ENDPOINT)
      .then((response) => response.json())
      .then((data: BookType[]) => setBooks(data))
      .finally(() => setIsLoading(false));
  }, []);

  return { books, isLoading };
}

export default useFetchBooks;
