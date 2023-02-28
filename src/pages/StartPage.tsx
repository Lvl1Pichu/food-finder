import { useState } from "react";
import styled from "styled-components";
import bg from "../assets/bg.jpg";
import Button from "../componets/Button";
import ErrorBoundary from "../componets/ErrorBoundary";
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

  // Change url to result-page followed by the searched ingredients.
  const handleSearch = () => {
    window.location.href = `/result-page?ingredients=${ingredients}`;
  };
  
  return (
      <PageContainer>
        <h1>Find a recipe that fits your needs!</h1>
        <ErrorBoundary>
          <InputForm onSubmit={handleAddIngredient} />
        </ErrorBoundary>
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
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 1000px rgba(0,0,0,.4);

  & h1 {
    text-align: center;
    font-weight: 400;
  }
`;