import { FormEvent, useState } from "react";
import styled from "styled-components";
import addIcon from "../assets/add.svg";


interface Props {
  onSubmit: (ingredient: string ) => void;
}

export default function InputForm(props: Props) {

  const [ingredient, setIngredient] = useState('');

  // This function is called when the form is submitted, 
  // ingredient state is updated
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
        value={ingredient} 
        onChange={(e) => setIngredient(e.target.value)}
      />
      <StyledSubmitButton onClick={() => {}}disabled={ingredient.length === 0}></StyledSubmitButton>
    </StyledForm>
  );
}

const StyledInputForm = styled.input`
  border: 0.125rem solid black;
  padding: 0.875rem;
  border-radius: 200rem;
  width: 18.375rem;
  font-size: 1.25rem;
  background-color: var(--light-clr);
  border: transparent;
  box-shadow: var(--drop-shaddow)
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
    cursor: auto;
  }
`;
