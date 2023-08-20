import styled from 'styled-components';

export const Wrap = styled.section`
  min-width: 50%;
  background-color: #fff;
  border: 2px solid #c9c9c9;
  border-radius: 10px;
  box-shadow: 2px 2px 5px #c9c9c9;
  overflow: hidden;
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
