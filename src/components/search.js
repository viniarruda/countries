import React, { useState } from 'react';

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchInputChanges = e => {
    search(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <form className='search'>
      <input value={searchValue} onChange={handleSearchInputChanges} type='text' />
    </form>
  );
};

export default Search;