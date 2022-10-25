import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.COR.BACKGROUND_900};
  color: ${({ theme }) => theme.COR.GRAY_300};

  border-radius: 10px;
  margin-bottom: 8px;

  > input {
    height: 56px;
    width: 100%;
    padding: 12px;
    border: 0;
    color: ${({ theme }) => theme.COR.WHITE};
    background-color: transparent;

    &:placeholder {
      color: ${({ theme }) => theme.COR.GRAY_300};
    }
  }

  > svg {
    margin-left: 16px;
  }
`
