import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/bg.jpg";
import Button from "../componets/Button";
import ErrorBoundary from "../componets/ErrorBoundary";
import HelpButton from "../componets/HelpButton";
import HelpPanel from "../componets/HelpPanel";
import InputForm from "../componets/InputForm";
import List from "../componets/List";


export default function StartPage() {

  const [ingredients, setIngredients] = useState<string[]>([]);
  const [helpOpen, setHelpOpen] = useState(false);
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
  
  // Toggle visibility of the help panel.
  const openHelp = () => {
    setHelpOpen(true)
  }

  const closeHelp = () => {
    setHelpOpen(false)
  }

  return (
      <PageContainer>
        <ButtonContainer>
          <HelpButton content="i" onClick={openHelp}></HelpButton>
        </ButtonContainer>
        <h1>Find a recipe that fits your needs!</h1>
        <ErrorBoundary>
          <InputForm onSubmit={handleAddIngredient} />
        </ErrorBoundary>
        <List 
          ingredients={ingredients} 
          removeIngredient={handleRemoveIngredient} 
          addIngredient={handleAddIngredient}
        />
        <Button label={"Search Recipes"} onClick={handleSearch} disabled={!ingredients.length}></Button>
        <HelpPanel closeHelp={closeHelp} helpOpen={helpOpen}/>
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

const ButtonContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`