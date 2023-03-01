import { useState } from "react";
import { useParams } from "react-router-dom";
import { RecipeCard } from "../interfaces";



import styled from 'styled-components';

function ResultPage() {
    const {ings} = useParams();
    const [ingredients, setIngredients] = useState(ings);
    const [recipeCards, setRecipeCards] = useState<RecipeCard[]>();

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
    //     .then((r) => r.json())
    //     .then((data) => setRecipeCards(data));
    // }, [ingredients] 
    // )

    /**
     * Removes hyphens from ingredients params and replaces with spaces.
     * Separates ingredients by ',+'.
     * Return array of li elements with ingrdient names as content and keys.
     */
    function listIngredients() {
        if(ings)
        return ings.replace("-", " ").split(",+").map(ing => <li key={ing}>{ing}</li>);
    }

    /**
     * Returns array of list items for each recipe in the state.
     */
    function listRecipes() {
        if (recipeCards)
        return recipeCards.map((r) => {return <li key={r.title}>{r.title}</li>})
        
    }

    return(
        <PageContainer>
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
        </PageContainer>
    )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #7a949c;
  color: #efefef;
  padding: 1.2rem;
  min-height: 100vh;
`;

export default ResultPage