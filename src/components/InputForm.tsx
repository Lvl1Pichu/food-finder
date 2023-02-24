import { FormEvent, useState } from "react";
import styled from "styled-components";
import Button from "./Button";

interface Props {
  onSubmit: (ingredient: string ) => void;
}

export default function InputForm(props: Props) {
  const [ingredient, setIngredient] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ingredient.length > 0) {
      props.onSubmit(ingredient);
      setIngredient("");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="ingredient">Add ingredient</label>
      <StyledInputForm
        id="ingredient"
        name="ingredient"
        type="text" 
        placeholder="Search..."
        value={ingredient} 
        onChange={(e) => setIngredient(e.target.value)}
      />
      <Button
        label="Add ingredient"
        disabled={ingredient.length === 0}
        onClick={() => {}}
      />
    </StyledForm>
  );
}

const StyledInputForm = styled.input`
  border: 2px solid black;
  padding: 14px;
  border-radius: 200px;
  font-size: 20px;
  margin-top: 1rem;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;
