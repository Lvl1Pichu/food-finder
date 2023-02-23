import styled from "styled-components";

function List() {
    return(
        <StyledList>
            <StyledListItem>
                Avocado
            </StyledListItem>
            <StyledListItem>
                Red onion
            </StyledListItem>
            <StyledListItem>
                Butter
            </StyledListItem>
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
