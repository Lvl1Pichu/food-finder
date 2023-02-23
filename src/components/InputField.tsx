import styled from "styled-components";

function InputField() {
    return (
        <StyledInputField
        className='ingredient-InputField' 
        type="text" 
        placeholder="Search..." 
        />
    )
}

export default InputField

const StyledInputField = styled.input`
  border: 2px solid black;
  padding: 14px;
  border-radius: 200px;
  font-size: 20px;
`;
