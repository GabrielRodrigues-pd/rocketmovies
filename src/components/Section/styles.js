import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  > h2 {
    margin-bottom: 40px;
    font-size: 32px;
    color: ${({ theme }) => theme.COR.WHITE};
    font-weight: 400;
  }
`
