import styled from "styled-components";

interface PrevProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
  }

function ButtonPrev(props: PrevProps) {
}

export default ButtonPrev


const PrevButton = styled.button`
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