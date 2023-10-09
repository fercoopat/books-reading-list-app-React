import { ChangeEvent, useRef } from 'react';
import styles from './range-input.module.css';

interface RangeInputProps {
  numberOfPages: { min: number; max: number };
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const RangeInput = ({
  numberOfPages: { min, max },
  onChange,
}: RangeInputProps) => {
  const selectorRef = useRef<HTMLInputElement | null>(null);

  return (
    <section className={styles['range-input']}>
      {selectorRef.current?.value ? selectorRef.current.value : min}
      <input
        type='range'
        name='range-selector'
        id='range-selector'
        className={styles['range-selector']}
        onChange={onChange}
        min={min}
        max={max}
        defaultValue={min}
        step={1}
        ref={selectorRef}
      />
      {max}
    </section>
  );
};
