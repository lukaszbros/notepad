import styled from 'styled-components';

interface ContainerProps {
  backgroundColor?: string;
  center?: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'transparen'};
  text-align: ${(props) => props.center ? 'center' : 'left'};
  padding: 15px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  padding-bottom: 30px;
`;

interface ActionButtonProps {
  color?: string;
  backgroundColor?: string;
}

export const ActionButton = styled.button<ActionButtonProps>`
  cursor: pointer;
  color: ${(props) => props.color ? props.color : '#787878'};
  padding: 5px 15px;
  border-radius: 3px;
  border: ${(props) => props.backgroundColor ? 0 : '1px solid #AAAAAA'};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#FFFFFF'};
`