import styled from 'styled-components';

export const Table = styled.table`
  width: 600px;
  font-size: 12px;
  line-height: 2.5;
  table-layout: fixed;
  background-color: ${({ theme }) => theme.bgColor};
  ${({ theme }) => theme.wrapBorder};
  border-collapse: collapse;
`;
