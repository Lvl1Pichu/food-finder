import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

interface HeaderProps {
  getRecipe: (ingredient: string) => Promise<void>
}

function Header(props: HeaderProps) {
  const [dropdownValue, setDropdownValue] = useState('default');


  const handleDropdownChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setDropdownValue(event.target.value);
  }

  const onClick = () => {
    props.getRecipe(dropdownValue);
  }

  return (
    <StyledHeaderContainer className="header">
      <StyledSearchBar
      className='ingredient-searchbar' 
      type="text" 
      placeholder="Search..." 
      />
      <StyledSelect value={dropdownValue} onChange={handleDropdownChange}>
        <option value="default">Select an option</option>
        <option value="cheddar">Cheddar</option>
        <option value="red-onion">Red onion</option>
        <option value="avocado">Avocado</option>
      </StyledSelect>
      <button onClick={onClick}>Find a recipe.</button>
    </StyledHeaderContainer>
  );
}

export default Header;

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #f5f5f5;
  padding: 20px;
`;

const StyledSearchBar = styled.input`
  border: 2px solid black;
  padding: 14px;
  border-radius: 200px;
  font-size: 20px;
`;

const StyledSelect = styled.select`
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