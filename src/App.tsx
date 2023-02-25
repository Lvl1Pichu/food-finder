import { useState } from 'react';
import './App.css';
import HeaderComponent from './componets/HeaderComponent';
import Output from './Output';
import StartPage from './pages/StartPage';

export default function App() {

  const [recipe, setRecipe] = useState('');

  async function getRecipe(value: string) {
    const options = {
      // ea186f9a58784d0d86b47956204c76be
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=ea186f9a58784d0d86b47956204c76be&ingredients=${value}&number=1`,
      options
    )
    .then((r) => r.json())
    .then((data) => setRecipe(data[0].title));
  }

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
            <HeaderComponent getRecipe={getRecipe}></HeaderComponent>
      <Output recipeTitle={recipe ? recipe : 'Select an ingredient to search for.'}></Output>
      <StartPage
        addIngredient={handleAddIngredient}
        removeIngredient={handleRemoveIngredient}
      />    
      </div>
  )}