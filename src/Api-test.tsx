import { useEffect, useState } from "react";

interface Recipe {
  title: string;
}

function APITest() {
  const [recipe, setRecipe] = useState("");

  useEffect(() => {
    const options = {
      // ea186f9a58784d0d86b47956204c76be
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    async function getRecipe() {
      const response = await fetch(
        "https://api.spoonacular.com/recipes/findByIngredients?apiKey=ea186f9a58784d0d86b47956204c76be&ingredients=apples,+flour,+sugar&number=1",
        options
      )
        .then((r) => r.json())
        .then((r) => setRecipe(r.title))
        .then((data) => console.log(data));
    }
    if (!recipe) {
      getRecipe();
    }
  });

  return (
    <div>
      <h1>API Test</h1>
      <div className="card">
        <p>{recipe ? recipe : "Search for recipes"};</p>
      </div>
    </div>
  );
}


export default APITest;