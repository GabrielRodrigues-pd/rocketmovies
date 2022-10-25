import styled from 'styled-components'
import bgImg from '../../assets/bgImg.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.COR.BG};
`
export const Form = styled.form`
  padding: 0 136px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COR.PINK};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COR.GRAY_300};
  }

  > h2 {
    margin: 48px 0;
    font-size: 24px;
    color: ${({ theme }) => theme.COR.WHITE};
  }

  > a {
    margin-top: 24px;
    font-size: 16px;
    color: ${({ theme }) => theme.COR.PINK};
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${bgImg}) no-repeat center center;
  background-size: cover;
`
