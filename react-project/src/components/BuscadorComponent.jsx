import React, { useState } from 'react';

const BuscadorComponent = ({ setSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    setSearch(inputValue); // Establece el estado de búsqueda utilizando setSearch
  };

  return (
    <div className='busqueda-input'>
      <input
        className='inputSearch'
        onChange={handleInputChange}
        value={searchInput}
        type='text'
        placeholder='buscar...'
      />
    </div>
  );
};

export default BuscadorComponent;
