import { ChangeEvent } from 'react';
import { GENDER, GENDER_VALUES } from '../../constants';

interface GenderSelectorProps {
  onSelectGender: (gender: string) => void;
}

function GenderSelector({ onSelectGender }: GenderSelectorProps) {
  const handleSelect = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    onSelectGender(target.value);
  };

  return (
    <select name='gender-selector' id='gender-selector' onChange={handleSelect}>
      {GENDER_VALUES.map((gender) => (
        <option key={gender} value={gender}>
          {gender === GENDER.ALL ? 'Todos' : gender}
        </option>
      ))}
    </select>
  );
}

export default GenderSelector;
