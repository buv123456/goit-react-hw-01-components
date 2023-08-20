import styled from 'styled-components';

export const TableHead = styled.th`
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  padding: 5px;
  color: ${({ theme }) => theme.textColor.light};

  background: teal;
  border: 1px solid #dddddd;
`;
