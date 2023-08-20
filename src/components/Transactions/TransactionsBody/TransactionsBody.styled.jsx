import styled from 'styled-components';

export const TableRow = styled.tr`
  text-align: center;
  color: ${({ theme }) => theme.textColor.grey};
  background: ${({ id }) => {
    return id % 2 ? 'none' : '#e0e0e0';
  }};
`;
