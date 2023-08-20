import styled from 'styled-components';

export const Card = styled.div`
  width: 300px;
  height: 450px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  background-color: ${({ theme }) => theme.bgColor};
  ${({ theme }) => theme.wrapBorder};
`;
