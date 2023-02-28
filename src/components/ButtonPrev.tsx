import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
interface PrevProps {
  label: string;
}

function ButtonPrev(props: PrevProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <StyledButtonPrev onClick={handleClick}>
      {props.label}
    </StyledButtonPrev>
  );
}


export default ButtonPrev


const StyledButtonPrev = styled.button`
  background-color: var(--light-clr);
  border: none;
  padding: 14px 26px;
  border-radius: 200px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: var(--light-clr-hover);
  }
`;