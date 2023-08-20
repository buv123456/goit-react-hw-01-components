import styled from 'styled-components';

export const List = styled.ul`
  width: 400px;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  font-size: 20px;
  font-weight: 500;

  height: 70px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;

  margin-bottom: 15px;
  padding: 20px;

  background-color: ${({ theme }) => theme.bgColor};
  ${({ theme }) => theme.wrapBorder};
`;
