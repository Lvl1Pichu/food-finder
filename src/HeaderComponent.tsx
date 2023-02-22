import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [dropdownValue, setDropdownValue] = useState('default');

  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(event.target.value);
  }

  return (
    <HeaderContainer className="header">
      <SearchBar
      className='ingredient-searchbar' 
      type="text" 
      placeholder="Search..." 
      />
      <Select value={dropdownValue} onChange={handleDropdownChange}>
        <option value="default">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #f5f5f5;
  padding: 20px;
`;

const SearchBar = styled.input`
  border: 2px solid black;
  padding: 14px;
  border-radius: 200px;
  font-size: 20px;
`;

const Select = styled.select`
border: 2px solid black;
padding: 14px;
font-size: 20px;
position: relative;

&::after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #000 transparent transparent transparent;
}
`;