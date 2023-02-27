import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/bg.jpg";
import remove from "../assets/remove.svg";
import Button from "../componets/Button";
import InputForm from "../componets/InputForm";
import List from "../componets/List";


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
  };
  
  const showHelp = () => {

  }

  const hideHelp = () => {

  }

  return (
      <PageContainer>
        <h1>Find a recipe that fits your needs!</h1>
        <InputContainer>
        <InputForm onSubmit={handleAddIngredient} />
          <HelpButton onClick={showHelp}>i</HelpButton>
        </InputContainer>
        <List 
          ingredients={ingredients} 
          removeIngredient={handleRemoveIngredient} 
          addIngredient={handleAddIngredient}
        />
        <Button label={"Search Recipes"} onClick={handleSearch}></Button>
        <Help>Help
          <HelpButton onClick={hideHelp}>{remove}</HelpButton>
        </Help>
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

const InputContainer = styled.div`
  display: flex;
`

const HelpButton = styled.button`
  border-radius: 50%;
  height: 100%;
`


const Help = styled.div`
`