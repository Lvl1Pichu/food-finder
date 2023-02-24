import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeCard } from "../types";



function ResultPage() {
    const {ings} = useParams();
    console.log(ings);
    const [ingredients, setIngredients] = useState(ings);
    const [recipeCards, setRecipeCards] = useState<RecipeCard[]>();

    useEffect(() => {
        console.log("UseEffect ran.")
        const options = {
            // ea186f9a58784d0d86b47956204c76be
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }

        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=ea186f9a58784d0d86b47956204c76be&ingredients=${ingredients}&number=3`,
        options)
        .then((r) => r.json())
        .then((data) => setRecipeCards(data));
    }, [ingredients] 
    )

    function listIngredients() {
        let ingsList
        ingsList = ings?.replace("-", " ").split("+");
        return ingsList?.map(ing => <li key={ing}>{ing}</li>) // Question! Can I remove question marks?
    }

    function listRecipes() {
        if (recipeCards)
       return recipeCards.map((r) => {return <li key={r.title}>{r.title}</li>})
    }

    return(
        <main>
            <div>
                <ul>
                    {listIngredients()}
                </ul>
            </div>
            <div>
                <ul>
                    {recipeCards ? listRecipes() : null}
                </ul>
            </div>
        </main>
    )
}

export default ResultPage