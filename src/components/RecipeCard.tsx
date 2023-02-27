import React from 'react';
import styled from 'styled-components';

const RecipeCard = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-image: url('/assets/hamburger.webp');
  background-size: cover;
`;

const RecipeOverlay = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.67);
`;

const RecipeTitle = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
`;

const RecipeText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const RecipeComponent = () => {
  return (
    <RecipeCard>
      <RecipeOverlay>
        <div>
          <RecipeTitle>2-4 people</RecipeTitle>
        </div>
        <div>
          <RecipeTitle>Hamburger</RecipeTitle>
        </div>
        <div>
          <RecipeTitle>40 min</RecipeTitle>
        </div>
      </RecipeOverlay>
    </RecipeCard>
  );
};

export default RecipeComponent;