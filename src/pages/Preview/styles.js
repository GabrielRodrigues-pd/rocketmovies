import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';
`

export const Main = styled.main`
  grid-area: content;
  width: 100%;
  margin-top: 40px;
  padding: 0 123px;

  > a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COR.PINK};
    gap: 10px;
    padding-bottom: 10px;
  }
`
export const Infomovie = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COR.GRAY_100};
  }

  .watch {
    margin-left: 10px;
  }
`
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
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
export const SectionCont = styled.section`
  height: 560px;
  overflow-y: auto;
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

  > div {
    display: flex;
    align-items: center;
    gap: 10px;

    h1 {
      margin: 24px 0;
      margin-right: 20px;
      font-size: 36px;
    }

    svg {
      width: 20px;
      height: 20px;
      fill: ${({ theme }) => theme.COR.PINK};
    }
  }

  > .tags {
    margin: 40px 0;
  }
`
