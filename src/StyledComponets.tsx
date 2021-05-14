import styled from 'styled-components';

export interface ContainerProps {
  backgroudColor: string;
}
export const Container = styled.div<ContainerProps>`
  width: 100%;
  background-color: ${(props) => props.backgroudColor};
  padding: 15px;
`;