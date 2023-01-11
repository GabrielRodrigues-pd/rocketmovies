import styled from 'styled-components'

export const Container = styled.button`
  width: 80px;
  background-color: ${({ theme }) => theme.COR.PINK};
  color: ${({ theme }) => theme.COR.BACKGROUND_700};

  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
