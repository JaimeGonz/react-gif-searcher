import { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const trimmedValue = inputValue.trim();
    if (trimmedValue.length > 2) {
      onNewCategory(trimmedValue);
      setInputValue('');
    }
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type='text'
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
