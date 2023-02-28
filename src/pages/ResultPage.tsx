import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/bg.jpg";
import RecipeCard from "../components/RecipeCard";

export default function ResultPage() {
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
            return ings.replace("-", " ").split(",+").map((ing) => <IngLI>{ing}</IngLI>)
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
        <IngredientsList>
            {listIngredients()}
        </IngredientsList>
        
        <RecipesContainer>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
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
`;

const IngredientsList = styled.ul`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding-top: 1.5rem;
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
    overflow-y: scroll;
    max-height: 600px;
`
