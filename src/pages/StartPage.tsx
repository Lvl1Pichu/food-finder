import { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import List from "../components/List";

interface Props {
  handleAddIngredient: (ingredient: string) => void;
}

function StartPage(props: Props) {

  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleAddIngredient = (ingredient: string) => {
    props.handleAddIngredient(ingredient);
    setIngredients([...ingredients, ingredient]);
  };

  return (
    <div>
      <PageContainer>
        <h1>My Pantry</h1>
        <InputForm onSubmit={handleAddIngredient} />
        <List ingredients={ingredients} />
        <Button label={"Search Recipes"} onClick={function (): void {} }></Button>
      </PageContainer>
    </div>
  )
}

export default StartPage

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: #f5f5f5;
  padding: 20px;
  height: 100vh;
`;