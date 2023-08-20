import styled from 'styled-components';

export const Mark = styled.span`
  display: block;
  width: 20px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${({ color }) => color};
`;

export const Avatar = styled.img`
  max-width: 50px;
  border-radius: 10px;
`;
