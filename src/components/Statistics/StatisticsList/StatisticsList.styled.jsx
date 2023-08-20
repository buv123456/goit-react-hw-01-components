import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const Item = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #fff;

  background-color: ${({ color }) => color};
`;
