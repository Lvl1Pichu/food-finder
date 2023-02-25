import { FormEvent, useState } from "react";
import styled from "styled-components";
import addIcon from "../assets/add.svg";


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
      <StyledInputForm
        id="ingredient"
        name="ingredient"
        type="text" 
        placeholder="Search..."
        value={ingredient} 
        onChange={(e) => setIngredient(e.target.value)}
      />
      <StyledSubmitButton onClick={() => {}}disabled={ingredient.length === 0}>+</StyledSubmitButton>
    </StyledForm>
  );
}

const StyledInputForm = styled.input`
  border: 2px solid black;
  padding: 14px;
  border-radius: 200px;
  font-size: 20px;
  background-color: var(--light-clr);
`;

const StyledForm = styled.form`
position: relative;
`;

const StyledSubmitButton = styled.button`
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  height: 1.8rem;
  width: 1.8rem;
  background-color: transparent;
  background-image: url(${addIcon});
  background-repeat: no-repeat;
  background-position: center center;
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: auto;
  }
`;
