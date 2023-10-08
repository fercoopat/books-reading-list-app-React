import { ChangeEvent } from 'react';
import styles from './search-input.module.css';

interface SearchInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function SearchInput({ onChange }: SearchInputProps) {
  return (
    <>
      <input
        className={styles['search-input']}
        type='text'
        placeholder='Search...'
        onChange={onChange}
      />
    </>
  );
}

export default SearchInput;
