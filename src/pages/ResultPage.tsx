import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ResultPage() {
    const {ings} = useParams();
    console.log(ings);
    const [ingredients, setIngredients] = useState(ings);
    const [recipes, setRecipes] = useState<object[]>();

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
        .then((data) => setRecipes(data));
    }, [ingredients] 
    )

    function listIngredients() {
        let ingsList
        ingsList = ings?.replace("-", " ").split("+");
        return ingsList?.map(ing => <li key={ing}>{ing}</li>) // Question! Can I remove question marks?
    }

    function listRecipes() {
        if (recipes)
       return recipes.map((r) => {return <li key={r.title}>{r.title}</li>})
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
                    {recipes ? listRecipes() : null}
                </ul>
            </div>
        </main>
    )
}

export default ResultPage