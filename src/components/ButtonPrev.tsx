import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
interface Props {
  label: string;
}

export default function ButtonPrev(props: Props) {
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


const StyledButtonPrev = styled.button`
  background-color: var(--light-clr);
  color: var(--dark-green);
  border: none;
  padding: 14px 26px;
  border-radius: 200px;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: var(--light-clr-hover);
  }
`;