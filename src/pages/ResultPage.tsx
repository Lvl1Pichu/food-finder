import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function ResultPage() {

  // Get the search query parameters from the URL using useLocation hook
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const ingredients = queryParams.get('ingredients')?.split(',') ?? [];
  
    return (
        <PageContainer>
        <h1>Search results for: {ingredients.join(' ')}</h1>
        <NavLink to="/start-page">Link to start page</NavLink>
      </PageContainer>
    );
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #7a949c;
  color: #efefef;
  padding: 1.2rem;
  min-height: 100vh;
`;

export default ResultPage