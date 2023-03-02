import { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ButtonPrev from "../components/ButtonPrev";
import ErrorBoundary from "../components/ErrorBoundary";
import PageContainer from "../components/PageContainer";
import RecipeInformation from "../components/RecipeInformation";
import recipeRespons from "../testDataRecipe";


function RecipePage() {

    const { id } = useParams();
    const [recipe, setRecipe] = useState<any>(recipeRespons);


      // useEffect(() => {
      //   const fetchData = async () => {
      //     try {
      //       const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=4cffef25f8784cd18f202dc419218d08`);
      //       const data = await response.json();
      //       setRecipe(data);
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   };
      //   fetchData();
      // }, [id]);
      console.log(recipe)


    return (
        <PageContainer>
          <ErrorBoundary>
            <ButtonContainer>
              <ButtonPrev label={"Back"}></ButtonPrev>
            </ButtonContainer>
            <ErrorBoundary>
            <RecipeInformation recipe={recipe}/>
            </ErrorBoundary>
          </ErrorBoundary>
        </PageContainer>
    )
}

export default RecipePage

const ButtonContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
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
    
