import { useContext } from 'react';
import { LibraryContext } from '../contexts';

function useLibraryContext() {
  const libraryContext = useContext(LibraryContext);

  return libraryContext;
}

export default useLibraryContext;
