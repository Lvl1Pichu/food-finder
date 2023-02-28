import styled from "styled-components";

function RecipeInformation() {
    const ingredients = ["Avocado", "Milk", "Butter"];
  
    return (
      <StyledIngredientList>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </StyledIngredientList>
    );
  }
  
export default RecipeInformation

const StyledIngredientList= styled.div`
  padding: 1rem;
  border-radius: 2.1rem;
  font-size: 1.2rem;
  min-width: 8rem;
  background-color: var(--light-clr);
  border: transparent;
  color: black;
  width:90%;
  max-width: 31.25rem;

  & ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  & li {
    padding: 0.8rem;
    
  }
`;