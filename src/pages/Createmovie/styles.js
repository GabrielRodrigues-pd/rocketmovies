import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'main';
`

export const Main = styled.main`
  grid-area: main;
  width: 100%;
  max-width: 100vw;
  margin-top: 40px;
  padding: 0 123px;
  overflow-x: hidden;

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

  > .input {
    display: flex;
    gap: 40px;
    justify-content: space-between;
    margin-top: 40px;
  }
`
export const Section = styled.section`
  width: 100%;

  > h2 {
    font-size: 20px;
    font-weight: normal;
    color: ${({ theme }) => theme.COR.GRAY_300};
  }

  .marcadores {
    display: flex;
    overflow-x: auto;
    gap: 24px;
    width: 100%;
    background-color: ${({ theme }) => theme.COR.BLACK};
    min-height: 88px;
    margin-top: 24px;
    border-radius: 8px;
    padding: 16px;
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
  }

  > footer {
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 80px;
    gap: 40px;

    > button:first-child {
      background-color: ${({ theme }) => theme.COR.BLACK};
      color: ${({ theme }) => theme.COR.PINK};

      &:hover {
        opacity: 0.5;
      }
    }
  }
`
