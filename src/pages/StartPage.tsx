import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";
import ErrorBoundary from "../components/ErrorBoundary";
import InputForm from "../components/InputForm";
import List from "../components/List";
import PageContainer from "../components/PageContainer";


export default function StartPage() {

  const [ingredients, setIngredients] = useState<string[]>([]);
  const navigate = useNavigate();

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
    const params = ingredients.join(',+');
    navigate(`/result/${params}`);
  }

  return (
      <PageContainer>
        <ErrorBoundary>
          <StyledHeader>Welcome to Food finder!{'\n'}What do you have in your kitchen?</StyledHeader>
          <InputForm onSubmit={handleAddIngredient} />
          <List 
            ingredients={ingredients} 
            removeIngredient={handleRemoveIngredient} 
            addIngredient={handleAddIngredient}
          />
          <Button label={"Search Recipes"} onClick={handleSearch} disabled={!ingredients.length}></Button>
        </ErrorBoundary>
      </PageContainer>
  )
}

const StyledHeader = styled.h1`
  max-width: 29rem;
  text-align: center;
  font-weight: 400;
  font-family: "IBM Plex Serif", serif;
`