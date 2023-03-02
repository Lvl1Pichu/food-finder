import styled from "styled-components";

interface Props {
  recipe: any;
}

const RecipeInformation: React.FC<Props> = ({ recipe }) => {
  return (
    <StyledRecipeContainer>
      <ImageCircleContainer style={{backgroundImage: `url(${recipe.image})`}}>
      </ImageCircleContainer>  
      <StyledMetaInfo>
        <span>{recipe.servings} Servings</span>
        <span>{recipe.readyInMinutes} Minutes</span>
      </StyledMetaInfo>
      <h2>{recipe.title}</h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient: any) => (
          <li key={ingredient.id}>
            {ingredient.original}
          </li>
        ))}
      </ul>
      {recipe.instructions && (
        <>
      <h3>Instructions</h3>
        <ol>
          {recipe.analyzedInstructions[0].steps.map((step: any) => (
            <li key={step.number}>
              {step.step}
            </li>
          ))}
        </ol>   
      </>
      )}
    </StyledRecipeContainer>
  );
};
  
export default RecipeInformation

const StyledRecipeContainer= styled.div`
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  min-width: 8rem;
  background-color: var(--light-clr);
  border: transparent;
  color: var(--dark-green);
  width:90%;
  max-width: 31.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  position: relative;
  box-shadow: var(--drop-shadow);

  & ul {
    margin: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }

  & li {
    padding: 0.2rem;
    gap: 0.5rem;
  }

  & h2 {
    margin: 0;
    padding: 4rem 0;
    font-family: "IBM Plex Serif", serif;
    border-bottom: 2px solid var(--dark-green);
    text-align: center;
  }

  & a {
    margin-top: 1rem;
  }
`;

const StyledMetaInfo = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 1rem 0;
border-bottom: 2px solid var(--dark-green);
`
const ImageCircleContainer = styled.div`
    width: 30%;
    aspect-ratio: 1;
    min-width: 170px;
    min-height: 170px;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    overflow: hidden;
    transform: translateY(-60%);
    top: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 6px solid white;
`
