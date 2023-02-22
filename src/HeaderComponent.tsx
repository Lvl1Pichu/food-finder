import React, { useState } from 'react';

function Header() {
  const [dropdownValue, setDropdownValue] = useState('default');

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
  }

  return (
    <div className="header">
      <input
      className='ingredient-searchbar' 
      type="text" 
      placeholder="Search..." 
      />
      <select value={dropdownValue} onChange={handleDropdownChange}>
        <option value="default">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default Header;