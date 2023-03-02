import styled from "styled-components";

interface Props {
    content: string
    onClick: () => void;
}

export default function HelpButton(props: Props) {
  return (
    <Button onClick={props.onClick}>{props.content}</Button>
  )
}

const Button = styled.button`
font-size: 1.5rem;
border-radius: 50%;
height: 3rem;
width: 3rem;
border: none;
background: var(--light-clr);
cursor: pointer;

&:hover {
  background: var(--light-clr-hover);
}   
`