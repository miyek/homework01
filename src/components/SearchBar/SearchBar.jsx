import React from 'react';

import Input from '../Input/Input';

const SearchBar = ({ className, onSearch }) => {
  const handleChange = (text) => {
    if( text.length > 2 ) {
      console.log(text);
    }
  };
  return (
    <div className={className}>
      <Input placeholder={'Search...'}
             onChange={(e) => handleChange(e.target.value)}/>
    </div>
  );
};

export default SearchBar;
