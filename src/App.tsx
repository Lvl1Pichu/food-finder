import { useState } from 'react';
import './App.css';
import StartPage from './pages/StartPage';

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleAddIngredient = (ingredient: string) => {
    setIngredients([...ingredients, ingredient]);
  };

  const handleRemoveIngredient = (ingredient: string) => {
    const updatedIngredientList = ingredients.filter(
      (item) => item !== ingredient
    );
    setIngredients(updatedIngredientList);
  };

  return (
    <div className="App">
      <StartPage
        handleAddIngredient={handleAddIngredient}
        removeIngredient={handleRemoveIngredient}
      />    
      </div>
  )
}

export default App
