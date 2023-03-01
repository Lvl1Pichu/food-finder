import styled from "styled-components";

interface Props {
  recipe: any;
}

const RecipeInformation: React.FC<Props> = ({ recipe }) => {
  return (
    <StyledRecipeContainer>
      <img src={recipe.image} alt={recipe.title} />
      <StyledMetaInfo>
        <span>Servings: {recipe.servings}</span>
        <span>{recipe.readyInMinutes} minutes</span>
      </StyledMetaInfo>
      <h2>{recipe.title}</h2>
      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient: any) => (
          <li key={ingredient.id}>
            <span>
            {ingredient.amount}
            </span>
            <span>
            {ingredient.name}
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
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }

  & li {
    padding: 0.8rem;
    display: flex;
    gap: 0.5rem;
  }

  & h2 {
    margin-top: 4rem;
    margin-bottom: 0.7rem;
    text-align: center;
  }

  & img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    overflow: hidden;
    transform: translateY(-100px);
    top: 0;
    position: absolute;
  }
`;

const StyledMetaInfo = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
padding: 1rem;
`
