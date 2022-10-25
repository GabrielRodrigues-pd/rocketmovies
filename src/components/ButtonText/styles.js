import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COR.PINK};
  gap: 10px;
  padding-bottom: 24px;
  background-color: transparent;
  border: 0;
`
