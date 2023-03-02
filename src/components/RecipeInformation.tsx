import styled from "styled-components";

interface Props {
  recipe: any;
}

const RecipeInformation: React.FC<Props> = ({ recipe }) => {
  return (
    <StyledRecipeContainer>
      <ImageCircleContainer>
        <img src={recipe.image} alt={recipe.title} />
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
            <span>
            {ingredient.original}
            </span>
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
      <a href={recipe.sourceUrl}>Link to Recipe</a>
    </StyledRecipeContainer>
  );
};
  
export default RecipeInformation

const StyledRecipeContainer= styled.div`
  padding: 1rem;
  border-radius: 2.1rem;
  font-size: 1.2rem;
  min-width: 8rem;
  background-color: var(--light-clr);
  border: transparent;
  color: black;
  width:90%;
  max-width: 31.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 90px;
  position: relative;

  & ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    list-style-type: circle;
  }

  & li {
    padding: 0.2rem;
    display: flex;
    gap: 0.5rem;
    list-style-type: circle;
  }

  & h2 {
    margin-top: 2rem;
    margin-bottom: 0.7rem;
    text-align: center;
  }

  & img {
    width: 200px;
    height: 170px;
    border: 1px solid black;
  }

  & a {
    margin-top: 1rem;
  }
`;

const StyledMetaInfo = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding-top: 1rem;
`
const ImageCircleContainer = styled.div`
    width: 170px;
    height: 170px;
    border-radius: 50%;
    overflow: hidden;
    transform: translateY(-100px);
    top: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 6px solid white;
`

