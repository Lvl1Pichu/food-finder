import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import HeaderComponent from './componets/HeaderComponent';
import Output from './Output';

function App() {

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
  

  return (
    <div className="App">
      <HeaderComponent getRecipe={getRecipe}></HeaderComponent>
      <Output recipeTitle={recipe ? recipe : 'Select an ingredient to search for.'}></Output>
      <Outlet></Outlet>
    </div>
  )
}

export default App
