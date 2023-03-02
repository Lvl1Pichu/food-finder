import styled from "styled-components";
import removeIcon from "../assets/remove.svg";
interface Props {
    ingredients: string[];
    addIngredient?: (ingredient: string) => void;
    removeIngredient: (ingredientToBeRemoved: string) => void;
  }

function List(props: Props) {

    return(
        <StyledList>
            {props.ingredients.map((ingredient, index) => (
                <StyledListItem key={index}>
                    <span>{ingredient}</span> 
                    <StyledRemoveButton onClick={() => props.removeIngredient(ingredient)}>
                    </StyledRemoveButton>
                </StyledListItem>
            ))}
        </StyledList>
    )
}

export default List

const StyledList= styled.ul`
    font-size: 1.125rem;
    list-style: none;
    padding: 1rem 0;
    margin: 0;
`;

const StyledListItem = styled.li`
    margin: 1rem;
    padding: 0.8rem;
    /* background-color: var(--light-clr); */
    color: #000;
    color: #fff;
    border-bottom: 2px solid #fff;
    padding: 0.8rem 1.2rem;
    /* border-radius: 200px; */
    font-size: 1.125rem;
    position: relative;
    display: flex;
    justify-content:space-between;
    align-items: center;
    width: 18.063rem;
`;

const StyledRemoveButton = styled.button`
  height: 1.6rem;
  width: 1.6rem;
  padding: 4px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  background-image: url(${removeIcon});
  background-repeat: no-repeat;
  background-position: center center;
`;

