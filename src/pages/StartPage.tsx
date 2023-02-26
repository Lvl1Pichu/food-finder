import { useState } from "react";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Button from "../componets/Button";
import InputForm from "../componets/InputForm";
import List from "../componets/List";


export default function StartPage() {

  const [ingredients, setIngredients] = useState<string[]>([]);

  // Add ingredients without mutating the ingredients list
  const handleAddIngredient = (ingredient: string) => {
    setIngredients([...ingredients, ingredient]);
  };

  // Remove ingredient and update list
  const handleRemoveIngredient = (ingredientToBeRemoved: string) => {
    const updatedIngredientList = ingredients.filter(
      (ingredient) => ingredient !== ingredientToBeRemoved
    )
    setIngredients(updatedIngredientList)
  }

  const handleSearch = () => {
    <NavLink to="/result-page" state={ingredients}></NavLink>
    window.location.href = `/result-page?ingredients=${ingredients}`;
  };
  
  return (
      <PageContainer>
        <h1>Find a recipe that fits your needs!</h1>
        <InputForm onSubmit={handleAddIngredient} />
        <List 
          ingredients={ingredients} 
          removeIngredient={handleRemoveIngredient} 
          addIngredient={handleAddIngredient}
        />
        <Button label={"Search Recipes"} onClick={handleSearch}></Button>
      </PageContainer>
  )
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #141414;
  color: #efefef;
  padding: 1.2rem;
  min-height: 100vh;

  & h1 {
    text-align: center;
  font-weight: 400;
  }
`;