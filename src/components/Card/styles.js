import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  padding: 32px;
  background-color: ${({ theme }) => theme.COR.PINK_LIGHT};
  border-radius: 16px;
  margin-bottom: 24px;
`
export const Preview = styled.div`
  cursor: pointer;

  > h1 {
    font-size: 24px;
    line-height: 30px;
    font-weight: 700;
    color: ${({ theme }) => theme.COR.WHITE};
  }

  > span {
    color: ${({ theme }) => theme.COR.PINK};
    font-size: 20px;
    border-radius: 10px;
  }

  > div {
    position: relative;
    display: flex;
    gap: 8px;
    margin-top: 10px;

    svg {
      fill: ${({ theme }) => theme.COR.PINK};
    }
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    margin: 20px 0;
    color: ${({ theme }) => theme.COR.GRAY_300};
  }
`
