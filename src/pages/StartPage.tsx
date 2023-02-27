import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg from "../assets/bg.jpg";
import Button from "../componets/Button";
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
  
  const openHelp = () => {
    setHelpOpen(true)
  }

  const closeHelp = () => {
    setHelpOpen(false)
  }

  return (
      <PageContainer>
        <h1>Find a recipe that fits your needs!</h1>
        <InputContainer>
        <InputForm onSubmit={handleAddIngredient} />
          <HelpButton onClick={openHelp}>i</HelpButton>
        </InputContainer>
        <List 
          ingredients={ingredients} 
          removeIngredient={handleRemoveIngredient} 
          addIngredient={handleAddIngredient}
        />
        <Button label={"Search Recipes"} onClick={handleSearch}></Button>
        <Help className={helpOpen ? "open" : "closed"}>Help
          <HelpButton onClick={closeHelp}>X</HelpButton>
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
  font-size: 1.5rem;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  border: none;
  background: var(--light-clr);
  cursor: pointer;

  &:hover {
    background: var(--light-clr-hover);
  }
`


const Help = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  top: 5%;
  bottom: 5%;
  left: 5%;
  right: 5%;
  padding: 2rem 5%;
  background: #c0c0c0;
  transition: transform 300ms cubic-bezier(1, 3, 3, 1);
  &.open {
    transform: translateY(0%);
  }
  
  &.closed {
    transform: translateY(110%);
  }
`