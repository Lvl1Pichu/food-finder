import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/bg.jpg";
import RecipeCard from "../components/RecipeCard";
import { IRecipeCard } from "../interfaces";

export default function ResultPage() {
        const {ings} = useParams();
        const [ingredients, setIngredients] = useState(ings);
        const [recipeCards, setRecipeCards] = useState<IRecipeCard[]>();
    
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
            return ings.replace("-", " ").split(",+").map((ing) => <IngLI key={ing}>{ing}</IngLI>)
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
            <RecipeCard image="https://spoonacular.com/recipeImages/73420-312x231.jpg" title={"Title"} missingNum={3} usingNum={3} missingIngs={["milk", "flour", "honey"]} usingIngs={["milk", "flour", "honey"]}/>
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
