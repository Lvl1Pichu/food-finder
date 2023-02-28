import { MouseEventHandler } from 'react';
import styled from 'styled-components';

const ListItemContainer = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 200px;
  background: rgba(255, 255, 255, 0.35);
  width: 200px;
`;

const ListItemText = styled.p`
  margin: 0;
  line-height: 1.5;
  color: white;
`;

const ListItemDeleteButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  font-size: 16px;
  color: black;
  cursor: pointer;
`;

interface LIProps {
  text: string;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}

const ListItem = (props: LIProps) => {
  return (
    <ListItemContainer>
      <ListItemText>{props.text}</ListItemText>
      <ListItemDeleteButton onClick={props.onDelete}>✕</ListItemDeleteButton>
    </ListItemContainer>
  );
};

export default ListItem;
