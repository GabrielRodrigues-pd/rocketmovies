import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    padding: 0 123px;
    grid-area: content;
    overflow-y: hidden;

    .header {
      margin-top: 50px;
      margin-bottom: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      h1 {
        font-size: 32px;
        color: ${({ theme }) => theme.COR.WHITE};
        font-weight: 400;
      }
    }
  }
`
export const NewNote = styled(Link)`
  width: 207px;
  height: 48px;
  background-color: ${({ theme }) => theme.COR.PINK};
  color: ${({ theme }) => theme.COR.BG};
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  > svg {
    width: 20px;
    height: 20px;
  }
`
export const Section = styled.section`
  border-radius: 16px;
  overflow-y: scroll;
  max-height: 500px;
  padding-right: 20px;

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COR.PINK};
    border-radius: 20px;
  }
`
