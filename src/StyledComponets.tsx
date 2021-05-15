import styled from 'styled-components';

interface ContainerProps {
  backgroundColor?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparen'};
  padding: 15px;
`;

export const NoteList = styled.ul`
  list-style-type: none;
`;

interface ActionButtonProps {
  backgroundColor?: string;
}

export const ActionButton = styled.button<ActionButtonProps>`
  padding: 5px 15px;
  border: ${(props) => props.backgroundColor ? 0 : '1px solid #AAAAAA'};;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#FFFFFF'};
`