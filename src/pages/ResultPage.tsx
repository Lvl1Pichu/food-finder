import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ListItem from "../componets/ListItem";



function ResultPage() {
    const {ings} = useParams();
    console.log(ings);
    const [ingredients, setIngredients] = useState(ings);
    const [recipes, setRecipes] = useState('');

    // function unpackIngredients() {
    //     let ingredients
    //     if(params) {
    //     ingredients = params.split("+");
    //     }
    //     return ingredients;
    // }

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
    }, [ingredients]
    )

    function renderList() {
        return(
            <ListItem></ListItem>
        )
    }

    return(
        <main>
            <div>
                <ul>
                    {renderList()}
                </ul>
            </div>
        </main>
    )
}

export default ResultPage