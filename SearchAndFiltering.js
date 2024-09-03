import React, { useState, useEffect } from 'react';

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);

  const items = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes', 'Pineapple'];

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setFilteredItems(
        items.filter((item) =>
          item.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }, 300); // 300ms debounce

    // return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;