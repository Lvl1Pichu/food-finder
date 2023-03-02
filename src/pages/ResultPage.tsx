import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ButtonPrev from "../components/ButtonPrev";
import ErrorBoundary from "../components/ErrorBoundary";
import PageContainer from "../components/PageContainer";
import RecipeCard from "../components/RecipeCard";
import { IRecipe } from "../interfaces";

export default function ResultPage() {
    const {ings} = useParams();
    const [ingredients, setIngredients] = useState(ings);
    const [recipeCards, setRecipeCards] = useState<IRecipe[]>();

    /**
     * Calls API on change of the ingredients state.
     */
    useEffect(() => {
        const options = {
            // API key: ea186f9a58784d0d86b47956204c76be
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }

        fetch(`https://api.spoonacular.com/recipes/findByIngredients?apiKey=ea186f9a58784d0d86b47956204c76be&ingredients=${ingredients}&number=3`,
        options)
        .then((r) => {
            if (!r.ok) throw new Error("")
            return r.json()
        })
        .then((data) => setRecipeCards(data))
        .catch((error) => {
            console.log(error);
        });
    }, [ingredients] 
    )

    return(
        <PageContainer>
            <ErrorBoundary>
                <Buttoncontainer>
                    <ButtonPrev label={"Back"} />
                </Buttoncontainer>    
                <IngredientsList>
                    <p>Recipies with:</p>
                    {
                        /* Array of list items containing names of ingredients in search. */
                        ings
                            ?.replace("-", " ")
                            .split(",+")
                            .map(ing => <IngLI key={ing}>{ing}</IngLI>)
                    }
                </IngredientsList>
                <RecipesContainer>
                    {recipeCards?.map((r) => (
                        <ErrorBoundary>
                            <RecipeCard recipe={r} key={r.id} />
                        </ErrorBoundary>
                    ))}
                </RecipesContainer>
            </ErrorBoundary>
        </PageContainer>
    )
}

const Buttoncontainer = styled.div`
   position: absolute;
   top: 0.6rem;
   left: 1rem;
`

const IngredientsList = styled.ul`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-evenly;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 1.5rem 0;
    margin-top: 2rem;
    color: var(--dark-green);
`;

const IngLI = styled.li`
    list-style: none;
    padding: 5px;
    border-radius: 5px;
    background: var(--light-clr);
    color: var(--dark-green);
    margin: 3px;
`

const RecipesContainer = styled.div`
    max-height: 600px;
    width: 90%;
    max-width: 500px;
    margin-top: -2.5rem;
`

