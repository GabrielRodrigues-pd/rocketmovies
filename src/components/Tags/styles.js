import styled from 'styled-components'

export const Container = styled.span`
  padding: 5px 16px;
  background-color: ${({ theme }) => theme.COR.BACKGROUND_700};
  color: ${({ theme }) => theme.COR.WHITE};
  border-radius: 8px;
`
