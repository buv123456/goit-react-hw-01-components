import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-around;
  ${({ theme }) => theme.bgColor};
  border-top: 2px solid #c9c9c9;
`;

export const Item = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-left: 2px #c9c9c9 solid;

  &:first-child {
    border: none;
  }
`;
