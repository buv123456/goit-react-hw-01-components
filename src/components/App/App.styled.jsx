import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: 50px;
  padding: 20px;

  color: ${({ theme }) => theme.textColor.grey};
  background-color: #dedede;
`;
