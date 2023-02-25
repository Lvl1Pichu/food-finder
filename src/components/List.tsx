import styled from "styled-components";
import addIcon from "../assets/add.svg";


interface Props {
    ingredients: string[];
    addIngredient: (ingredient: string) => void;
    removeIngredient: (ingredientToBeRemoved: string) => void;
  }

function List(props: Props) {

    return(
        <StyledList>
            {props.ingredients.map((ingredient, index) => (
                <StyledListItem key={index}>
                    {ingredient} 
                    <StyledRemoveButton onClick={() => props.removeIngredient(ingredient)} />
                </StyledListItem>
            ))}
        </StyledList>
    )
}

export default List

const StyledList= styled.ul`
  padding: 14px;
  font-size: 20px;
  list-style: none;
`;

const StyledListItem = styled.li`
    margin: 1rem;
    padding: 0.8rem;
    background-color: var(--light-clr);
    color: #000;
    border: none;
    padding: 14px 26px;
    border-radius: 200px;
    font-size: 20px;
    position: relative;
    display: flex;
    align-items: center;
`;

const StyledRemoveButton = styled.button`
  opacity: 0.7;
  right: 1.2rem;
  top: 42%;
  rotate: 134deg;
  transform: translateX(-50%);
  height: 1.8rem;
  width: 1.8rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background-image: url(${addIcon});
    background-repeat: no-repeat;
    background-position: center center;
  }

  &:hover {
    opacity: 1;
  }
`;

