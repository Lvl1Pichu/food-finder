import styled from 'styled-components';
import food from "../assets/food.jpg";

const RecipeCard = () => {
  return (
    <CardContainer>
      <CircleContainer>
        <Circle></Circle>
      </CircleContainer>
      <RecipeOverlay>
        <div>
          <RecipeTitle>Hamburger</RecipeTitle>
        </div>
      </RecipeOverlay>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: center;
`

const Circle = styled.div`
  aspect-ratio: 1;
  width: 100px;
  border-radius: 50%;
  background-image: url(${food});
  background-size: cover;
  z-index: 10;
  border: 2px solid black;
`;

const RecipeOverlay = styled.div`
  position: absolute;
  top: 20%;
  width: 100%;
  max-width: 200px;
  height: 60%;
  border-radius: 15px;
  margin-left: 1.5rem;
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

export default RecipeCard;