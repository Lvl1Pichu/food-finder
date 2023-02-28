import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/bg.jpg";



import ButtonPrev from "../components/ButtonPrev";
import RecipeCard from "../components/RecipeCard";
import testResponse from "../testData";

export default function ResultPage() {
    const {ings} = useParams();
    const [ingredients, setIngredients] = useState(ings);
    const [recipeCards, setRecipeCards] = useState(testResponse);

    /**
     * Calls API on change of the ingredients state.
     */
    // useEffect(() => {
    //     const options = {
    //         // API key: ea186f9a58784d0d86b47956204c76be
    //         method: "GET",
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }

    //     fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=ea186f9a58784d0d86b47956204c76be&ingredients=${ingredients}&number=3`,
    //     options)
    //     .then((r) => {
    //         if (!r.ok) throw new Error("")
    //         return r.json()
    //     })
    //     .then((data) => setRecipeCards(data))
    //     .catch(() => {
    //         // setError("Tyvärr....")
    //     });
    // }, [ingredients] 
    // )

    // Array of list items containing names of ingredients in search.
    const list = ings?.replace("-", " ").split(",+").map(ing => <li key={ing}>{ing}</li>);

    // Array of recipe cards using API data.
    const recipes = recipeCards?.map((r) => {return <RecipeCard key={r.id} image={r.image} title={r.title} missingNum={r.missedIngredientCount} usingNum={r.usedIngredientCount} missingIngs={r.missedIngredients.map((ing)=> {return ing.name})} usingIngs={r.usedIngredients.map((ing) => {return ing.name})}/>})

    return(
        <PageContainer>
            <ButtonPrev label={"Back"}></ButtonPrev>

            <div>
                <ul>
                    {list}
                </ul>
            </div>
            <RecipesContainer>
                {recipes};
            </RecipesContainer>
        </PageContainer>
    )
}


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141414;
  color: #efefef;
  min-height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow-y: scroll;
`;

const IngredientsList = styled.ul`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding: 1.5rem 0;
`;

const IngLI = styled.li`
    list-style: none;
    padding: 5px;
    border-radius: 5px;
    background: var(--light-clr);
    color: black;
    margin: 3px;
`

const RecipesContainer = styled.div`
    max-height: 600px;
    width: 90%;
    max-width: 500px;
`
