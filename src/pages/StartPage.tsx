import styled from "styled-components";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import List from "../components/List";

function StartPage() {
    return (
    <PageContainer>
    <h1>My Pantry</h1>
    <InputForm onSubmit={function (ingredient: string): void {
                throw new Error("Function not implemented.");
            } }></InputForm>
    <List></List>
    <Button label={"Search Recipes"} onClick={function (): void {
                throw new Error("Function not implemented.");
            } }></Button>
    </PageContainer>
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