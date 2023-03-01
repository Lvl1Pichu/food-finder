import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface RecipeCardProps {
  id: number;
  image: string;
  title: string;
  missingNum: number;
  usingNum: number;
  missingIngs: string[];
  usingIngs: string[];
}

export default function RecipeCard (props: RecipeCardProps) {
  const listIngs = (ings: string[]) => {
    return ings.map((ing) => <IngLI key={ing}>{ing}</IngLI>);
  };

  const navigate = useNavigate();

  const openRecipe = () => {
    navigate("/recipe/" + props.id);
  };
  
  return (
    <CardContainer onClick={openRecipe}>
      <CircleContainer>
        <Circle
          style={{ backgroundImage: "url(" + props.image + ")" }}
        ></Circle>
      </CircleContainer>
      <RecipeOverlay className="bg-hover">
        <RecipeTitle>{props.title}</RecipeTitle>
        <TextContainer>
          <IngsNum>Missing {props.missingNum} ingredients:</IngsNum>
          <IngsNum>Uses {props.usingNum} ingredients:</IngsNum>
          <ul>
            {listIngs(props.missingIngs)}
          </ul>
          <ul>{listIngs(props.usingIngs)}</ul>
        </TextContainer>
      </RecipeOverlay>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 250px;
  border-radius: 50%;
  margin-top: 6rem;
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
  width: 100px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
  z-index: 10;
  border: 2px solid black;
`;

const RecipeOverlay = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
  transition: background-color 200ms ease;
  padding: 1.5rem;
`;

const RecipeTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
  color: black;
  text-align: center;
  margin-top: 3.1rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  & > * {
    color: black;
    width: 50%;
    padding: 0;
  }
`;

const IngsNum = styled.h3``;

const IngLI = styled.li`
  list-style: none;
`;
