import { useState } from 'react';
import './App.css';
import StartPage from './pages/StartPage';

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleAddIngredient = (ingredient: string) => {
    setIngredients([...ingredients, ingredient]);
  };

  return (
    <div className="App">
      <StartPage handleAddIngredient={handleAddIngredient} />
    </div>
  )
}

export default App
