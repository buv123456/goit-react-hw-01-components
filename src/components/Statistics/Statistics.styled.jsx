import styled from 'styled-components';

export const Wrap = styled.section`
  min-width: 50%;
  background-color: ${({ theme }) => theme.bgColor};
  ${({ theme }) => theme.wrapBorder};
`;

export const Title = styled.h1`
  height: 100px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  display: ${({ children }) => (children ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
`;
