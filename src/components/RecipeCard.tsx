import styled from 'styled-components';

interface RecipeCardProps {
  image: string;
  title: string;
  missingNum: number;
  usingNum: number;
  missingIngs: string[];
  usingIngs: string[];
}

const RecipeCard = (props: RecipeCardProps) => {

  const listIngs = (ings: string[]) => {
    return ings.map((ing) => <IngLI key={ing}>{ing}</IngLI>)
  }

  return (
    <CardContainer>
      <CircleContainer>
        <Circle style={{backgroundImage: "url(" + props.image + ")"}}></Circle>
      </CircleContainer>
      <RecipeOverlay>
        <div>
          <RecipeTitle>{props.title}</RecipeTitle>
        </div>
        <TextContainer>
          <div>
          <IngsNum>Missing {props.missingNum} ingredients.</IngsNum>
          <ul>
            Missing:
            {listIngs(props.missingIngs)}
          </ul>

          </div>
          <div>
          <IngsNum>Uses {props.usingNum} ingredients.</IngsNum>
          <ul>
            Using:
            {listIngs(props.usingIngs)}

          </ul>

          </div>

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
`;

const CircleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Circle = styled.div`
  aspect-ratio: 1;
  width: 100px;
  border-radius: 50%;
  background-size: cover;
  z-index: 10;
  border: 2px solid black;
`;

const RecipeOverlay = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;
  border-radius: 15px;
  background-color: rgba(255, 255, 255, 1);
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

  & div {
    width: 50%;
    padding: 0 0.5rem;
  }
`

const IngsNum = styled.h3`
  
`

const IngLI = styled.li`
  list-style: none;
`

export default RecipeCard;