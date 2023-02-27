import styled from 'styled-components';

const ListItemContainer = styled.div`
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 25%;
  opacity: 0.35;
  background-color: white;
`;

const ListItemText = styled.p`
  margin: 0;
  line-height: 1.5;
`;

const ListItemDeleteButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border: none;
  background-color: transparent;
  font-size: 16px;
  color: red;
  cursor: pointer;
`;

const ListItem = ({ text, onDelete }: { text: string, onDelete: () => void }) => {
  return (
    <ListItemContainer>
      <ListItemText>{text}</ListItemText>
      <ListItemDeleteButton onClick={onDelete}>✕</ListItemDeleteButton>
    </ListItemContainer>
  );
};

export default ListItem;
