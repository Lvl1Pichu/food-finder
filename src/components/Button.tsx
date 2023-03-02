import styled from 'styled-components';

interface Props {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}
  
function Button(props: Props) {
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
  background-color: var(--light-clr);
  border: none;
  color: var(--dark-green);
  padding: 0.875rem 1.625rem;
  border-radius: 200rem;
  font-size: 1.25rem;
  width: 18.375rem;
  box-shadow: var(--drop-shaddow);
  cursor: pointer;

  &:hover {
    background: var(--light-clr-hover);
  }

  &:disabled {
    color: var(--dark-green);
  }
`;