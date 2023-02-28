import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/bg.jpg";
import ButtonPrev from "../components/ButtonPrev";
import RecipeInformation from "../components/RecipeInformation";


function RecipePage() {

    const { id } = useParams();
    const [ingredients, setIngredients] = useState<string[]>([]);
    const [recipeCards, setRecipeCards] = useState<any[]>([]);

      useEffect(() => {
        if (id){
        fetch(`https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=ea186f9a58784d0d86b47956204c76be`)
          .then(response => response.json())
          .then(data => {
            setIngredients(data.ingredients.map((i: any) => i.name));
          })
          .catch(error => console.error(error));
        }
      }, [id]);

    return (
        <PageContainer>
            <ButtonContainer>
            <ButtonPrev label={"Back"}></ButtonPrev>
            </ButtonContainer>
            <h1>Recipe</h1>
            <RecipeInformation ingredients={ingredients} />
            <StyledRecipeButton>Link to recipe</StyledRecipeButton>
        </PageContainer>
    )
}

export default RecipePage



/* width: 90%;
max-width: calc(500px + 10%);
padding: 2rem 5%; */

const ButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #141414;
  color: #efefef;
  padding: 1.2rem;
  min-height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);

  & h1 {
    text-align: center;
    font-weight: 400;
  }
`;

const StyledRecipeButton = styled.a`
    text-decoration: none;
    background-color: var(--light-clr);
    padding: 14px 26px;
    border-radius: 200px;
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
    text-align: center;
    margin-top: 1rem;
    width:90%;
    max-width: 31.25rem;

    &:hover {
    background: var(--light-clr-hover);
    }
`;
    
