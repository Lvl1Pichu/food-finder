import { useState } from "react";
import styled from "styled-components";
import Button from "../componets/Button";
import InputForm from "../componets/InputForm";
import List from "../componets/List";

interface Props {
  addIngredient: (ingredient: string) => void
  removeIngredient: (ingredientToBeRemoved: string) => void;
}

export default function StartPage(props: Props) {

  const [ingredients, setIngredients] = useState<string[]>([]);

  // Add ingredients without mutating the ingredients list
  const handleAddIngredient = (ingredient: string) => {
    props.addIngredient(ingredient);
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
    // Pass ingredients to ResultPage
    // ...
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
`;