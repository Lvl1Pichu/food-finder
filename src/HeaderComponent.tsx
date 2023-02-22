import { ChangeEvent, useState } from 'react';

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
    <div className="header">
      <select value={dropdownValue} onChange={handleDropdownChange}>
        <option value="default">Select an option</option>
        <option value="cheddar">Cheddar</option>
        <option value="red-onion">Red onion</option>
        <option value="avocado">Avocado</option>
      </select>
      <button onClick={onClick}>Find a recipe.</button>
    </div>
  );
}

export default Header;