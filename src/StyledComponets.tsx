import styled from 'styled-components';

export interface ContainerProps {
  backgroudColor?: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: ${(props) => props.backgroudColor ? props.backgroudColor : 'transparen'};
  padding: 15px;
`;

export const NoteList = styled.ul`
  list-style-type: none;
`;