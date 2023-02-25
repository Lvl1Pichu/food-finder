import { useState } from 'react';
import './App.css';
import StartPage from './pages/StartPage';

function App() {
  const [ingredients, setIngredients] = useState<string[]>([]);

  // Add and remove ingredient
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
        addIngredient={handleAddIngredient}
        removeIngredient={handleRemoveIngredient}
      />    
      </div>
  )
}

export default App
