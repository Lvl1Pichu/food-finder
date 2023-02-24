import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function ResultPage() {
    const {ings} = useParams();
    console.log(ings);
    const [ingredients, setIngredients] = useState(ings);
    const [recipes, setRecipes] = useState('');

    function listIngredients() {
        let ingsList
        ingsList = ings?.split("+");
        return ingsList?.map(ing => <li>{ing}</li>)
    }

    useEffect(() => {
        console.log("UseEffect ran.")
        const options = {
            // ea186f9a58784d0d86b47956204c76be
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }

        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=ea186f9a58784d0d86b47956204c76be&ingredients=${ingredients}&number=1`,
        options)
        .then((r) => r.json())
        .then((data) => console.log(data));
    }, //[ingredients]
    )

    return(
        <main>
            <div>
                <ul>
                    {listIngredients()}
                </ul>
            </div>
        </main>
    )
}

export default ResultPage