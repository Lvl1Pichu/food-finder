import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IRecipe } from "../interfaces";

interface Props {
  recipe: IRecipe
}

export default function RecipeCard({ recipe }: Props) {
  const navigate = useNavigate();
  
  const openRecipe = () => {
    navigate("/recipe/" + recipe.id);
  };
  
  return (
    <CardContainer onClick={openRecipe}>
      <CircleContainer>
        <Circle
          style={{ backgroundImage: "url(" + recipe.image + ")" }}
        ></Circle>
      </CircleContainer>
      <RecipeOverlay className="bg-hover">
        <RecipeTitle>{recipe.title}</RecipeTitle>
        <TextContainer>
          <IngsNum>Missing {recipe.missedIngredientCount}</IngsNum>
          <IngsNum>Uses {recipe.usedIngredientCount}</IngsNum>
        </TextContainer>
      </RecipeOverlay>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 50%;
  cursor: pointer;
  transform: scale(100%);
  transition: transform 200ms ease;

  &:hover {
    transform: scale(103%);

    & > div.bg-hover {
      background-color: var(--light-clr-hover);
    }

    & > div > p {
      text-decoration: underline;
    }
  }
`;

const CircleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Circle = styled.div`
  aspect-ratio: 1;
  width: 110px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  z-index: 10;
  border: 6px solid white;
  top: -55px;
  position: absolute;
`;

const RecipeOverlay = styled.div`
  position: relative;
  width: 100%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  transition: background-color 200ms ease;
  padding: 1.5rem;
  text-align: center;
`;

const RecipeTitle = styled.p`
  margin: 55px 0 0 0;
  font-weight: bold;
  font-size: 35px;
  color: var(--dark-green);
  text-align: center;
  margin-top: 3.1rem;
  padding-top: 2rem;
  overflow-wrap: break-word;
  border-top: 1px solid var(--dark-green);
  font-family: "IBM Plex Serif", serif;

  @media (max-width: 450px){
    font-size: 24px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    color: var(--dark-green);
    width: 50%;
    padding: 0;
  }
`;

const IngsNum = styled.h3`
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--dark-green);

@media (max-width: 450px){
    font-size: 15px;
  }
`;

const IngLI = styled.li`
  list-style: none;
  color: var(--dark-green);
`;
