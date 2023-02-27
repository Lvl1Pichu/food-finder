import ListItem from "../components/ListItem"
import RecipeComponent from "../components/RecipeCard"
import { RecipeCard } from "../interfaces"
import styled from "styled-components";
import { useState } from "react";
import bg from "../assets/bg.jpg";


const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #141414;
  color: #efefef;
  min-height: 100vh;
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const IngredientsContainer = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;
    padding-top: 1.5rem;
`;

const RecipesContainer = styled.div`
    
`

function RecipePage() {


 return(
    <PageContainer>
        <IngredientsContainer>
            <ListItem text={""} onDelete={function (): void {
                throw new Error("Function not implemented.")
            } }></ListItem>
            <ListItem text={""} onDelete={function (): void {
                throw new Error("Function not implemented.")
            } }></ListItem>
            <ListItem text={""} onDelete={function (): void {
                throw new Error("Function not implemented.")
            } }></ListItem>
        </IngredientsContainer>
        
        <RecipesContainer>
            <RecipeComponent></RecipeComponent>
            <RecipeComponent></RecipeComponent>
            <RecipeComponent></RecipeComponent>
        </RecipesContainer>
    </PageContainer>
)
}


export default RecipePage