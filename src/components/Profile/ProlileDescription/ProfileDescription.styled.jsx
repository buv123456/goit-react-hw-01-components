import styled from 'styled-components';

export const Description = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;

export const Avatar = styled.img`
  width: 180px;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.textColor.dark};
  margin-bottom: 20px;
`;

export const Tag = styled.p`
  margin-bottom: 20px;
`;

export const Locat = styled.p`
  margin-bottom: 40px;
  font-size: 20px;
`;
