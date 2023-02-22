import styled from 'styled-components';

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
  
function Button(props: ButtonProps) {
  const { label, onClick, disabled } = props;
  
  return (
    <StyledButton 
    onClick={onClick} 
    disabled={disabled}> 
    {label}</StyledButton>
    );
  }
  
export default Button;

const StyledButton = styled.button`
  background-color: #fff;
  border: 2px solid black;
  padding: 14px 26px;
  border-radius: 200px;
  font-size: 20px;
  cursor: pointer;
  margin-top: 2rem;

  &:hover {
    background: pink;
  }
`;