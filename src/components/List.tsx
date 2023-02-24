import styled from "styled-components";

interface Props {
    ingredients: string[];
  }

function List(props: Props) {

    return(
        <StyledList>
            {props.ingredients.map((ingredient, index) => (
                <StyledListItem key={index}>{ingredient}</StyledListItem>
            ))}
        </StyledList>
    )
}

export default List

const StyledList= styled.ul`
  border: 2px solid black;
  padding: 14px;
  font-size: 20px;
  list-style: none;
`;

const StyledListItem = styled.li`
    margin: 2rem;
    padding: 0.8rem;
    border: 2px solid black;
    border-collapse: collapse;
`;
