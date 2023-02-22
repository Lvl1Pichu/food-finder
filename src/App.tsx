import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [recipe, setRecipe] = useState('');

  useEffect(() =>{
    const options = {
      // ea186f9a58784d0d86b47956204c76be
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    }
    async function getRecipe() {
      const response = await fetch("https://api.spoonacular.com/recipes/findByIngredients?apiKey=ea186f9a58784d0d86b47956204c76be&ingredients=apples,+flour,+sugar&number=1", options)
      .then((r) => 
        r.json()
      )
      .then((data) =>
        console.log(data)
      );
    }
    if(!recipe) {
      getRecipe();
    }
  })

  return (
    <div className="App">
      <h1>API Test</h1>
      <div className="card">
        <p>
          
        </p>
      </div>
    </div>
  )
}

export default App
